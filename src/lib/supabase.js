import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to get the current user
export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Get the user's profile from the users table
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user profile:", error);

    // If the profile doesn't exist yet, try to create it from user metadata
    if (error.code === "PGRST116") {
      try {
        // Create profile from auth metadata if available
        if (user.user_metadata) {
          // Format phone number if needed
          let phoneNumber = user.user_metadata.phone_number;
          if (phoneNumber && !phoneNumber.startsWith("+")) {
            phoneNumber = `+${phoneNumber}`;
          }

          const { error: insertError } = await supabase.from("users").insert([
            {
              id: user.id,
              email: user.email,
              full_name: user.user_metadata.full_name,
              phone_number: phoneNumber,
              role: user.user_metadata.role,
              otp_verified: false,
            },
          ]);

          if (!insertError) {
            // Try fetching again after creating
            const { data: newData } = await supabase
              .from("users")
              .select("*")
              .eq("id", user.id)
              .single();

            if (newData) {
              return { ...user, profile: newData };
            }
          }
        }
      } catch (createError) {
        console.error("Error creating missing user profile:", createError);
      }
    }
    return { ...user, profile: null };
  }

  return { ...user, profile: data };
};

// Helper function to check if user is authenticated
export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return !!session;
};

// Helper function to check if user has a specific role
export const hasRole = async (role) => {
  const user = await getCurrentUser();
  return user?.profile?.role === role;
};