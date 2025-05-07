import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, getCurrentUser } from '../lib/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(null)
  const [otpVerified, setOtpVerified] = useState(false)

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      setLoading(true)
      
      try {
        // Check for existing session
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          const currentUser = await getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);
  //Sign up with Otp --SignInWthOtp
  // const signInWithOtp = async ({ email }) => {
  //   const { data, error } = await supabase.auth.signInWithOtp({
  //     email: email, // Email address to send the OTP to
  //     options: {
  //       // set this to false if you do not want the user to be automatically signed up
  //       shouldCreateUser: false,
  //     },
  //   });
  //   return { data, error };
  // };
    
  // Sign up with email and password
  const signUp = async ({ email, password, fullName, phoneNumber, role }) => {
    try {
      // Validate email format before proceeding
      if (email.includes("@example.com")) {
        return {
          data: null,
          error: { message: "Example email addresses are not allowed" },
        };
      }

      // Validate phone number format before proceeding
      if (phoneNumber && !phoneNumber.startsWith("+")) {
        phoneNumber = `+${phoneNumber}`; // Ensure phone number has international format
      }

      // Add metadata to the signup to ensure it's available in the JWT
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone_number: phoneNumber,
            role: role,
          },
        },
      });

      if (error) throw error;

      // Create user profile in the users table
      if (data.user) {
        console.log("Creating user profile for:", data.user.id);

        const { data, error } = await supabase
        .from("users")
        .insert([
          {
            id: data.user.id,
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            role: role,
            otp_verified: false, // OTP is not verified at sign-up
          },
        ]);

        if (profileError) {
          console.error("Error creating user profile:", profileError);
          throw profileError;
        }

        console.log("User profile created successfully");
      }

      return { data, error: null };
    } catch (error) {
      console.error("Signup error:", error);
      return { data: null, error };
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Update password
  const updatePassword = async (newPassword) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    const {
      data: {session},
      error,
    } = await supabase.auth.verifyOTP({
      email: email,
      token: otp,
      type: 'email',
    })
  }

  const value = {
    user,
    loading,
    // signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    // signInWithOtp,
    verifyOTP,
    otp,
    setOtp,
    otpError,
    otpVerified,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
