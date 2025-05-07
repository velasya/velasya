import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

function Auth() {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1: Personal Info, 2: Role Selection, 3: OTP
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    role: "",
    otp: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && !email.includes("@example.com");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpVerification = async () => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: formData.email,
      token: formData.otp,
      type: "email",
    });
  };

  const handleRoleSelect = async (selectedRole) => {
    setFormData((prev) => ({ ...prev, role: selectedRole }));
    setStep(3);
    // Here you would trigger OTP sending via email and SMS
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: formData.email,
        options: {
          shouldCreateUser: true,
        },
      });
      if (error) {
        console.error("Error sending OTP:", error);
        setErrorMessage("Failed to send OTP. Please try again.");
        return;
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Please try again.");
      return;
    }
  };

  const validateForm = () => {
    if (!formData.email || !validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.fullName || formData.fullName.length < 2) {
      setErrorMessage("Please enter your full name");
      return false;
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      setErrorMessage("Please enter a valid phone number");
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await signIn(formData.email, formData.password);
        if (error) throw error;
        navigate("/dashboard");
      } else {
        if (step === 1 && validateForm()) {
          setStep(2); // Move to role selection
        } else if (step === 2) {
          handleRoleSelect(formData.role);
        } else if (step === 3) {
          // Verify OTP and complete registration

          console.log("Submitting registration with:", {
            email: formData.email,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            role: formData.role,
          });
          if (error) throw error;
          alert(
            "Registration successful! Please check your email to verify your account."
          );
          setIsLogin(true);
          setStep(1);
        }
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setErrorMessage(
        error.message || "An error occurred during authentication"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const renderPersonalInfoForm = () => (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-vintage-cream/80 mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-vintage-cream/80 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-vintage-cream/80 mb-2">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
          placeholder="+1234567890"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-vintage-cream/80 mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => validateForm() && setStep(2)}
          className="flex items-center justify-center bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-2 px-4 rounded-full transition-all duration-300">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl text-vintage-cream text-center mb-6">
        Choose your role
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleRoleSelect("buyer")}
          className="bg-vintage-gold/10 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-navy p-6 rounded-lg border-2 border-vintage-gold/50 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2">Continue as Buyer</h4>
          <p className="text-sm opacity-80">
            Bid on unique items and grow your collection
          </p>
        </button>
        <button
          onClick={() => handleRoleSelect("seller")}
          className="bg-vintage-gold/10 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-navy p-6 rounded-lg border-2 border-vintage-gold/50 transition-all duration-300">
          <h4 className="text-lg font-semibold mb-2">Continue as Seller</h4>
          <p className="text-sm opacity-80">
            List items and reach potential buyers
          </p>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(1)}
          className="flex items-center justify-center bg-vintage-navy border border-vintage-gold/50 text-vintage-gold font-medium py-2 px-4 rounded-full hover:bg-vintage-navy/80 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );

  const renderOTPVerification = () => (
    <div className="space-y-6">
      <h3 className="text-xl text-vintage-cream text-center mb-6">
        Verify Your Account
      </h3>
      <p className="text-vintage-cream/80 text-center">
        Please enter the verification code sent to your email and phone
      </p>
      <div>
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleOtpVerification}
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
          placeholder="Enter verification code"
          maxLength="6"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(2)}
          className="flex items-center justify-center bg-vintage-navy border border-vintage-gold/50 text-vintage-gold font-medium py-2 px-4 rounded-full hover:bg-vintage-navy/80 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-vintage-navy relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-md w-full mx-4">
        <div className="relative">
          <div className="absolute -inset-4 bg-vintage-gold/20 rounded-lg blur-2xl" />
          <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-center mb-8 text-vintage-cream">
              {isLogin ? "Welcome Back" : "Join Velasya"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-500/20 border border-red-500/50 text-vintage-cream p-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              {isLogin ? (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-vintage-cream/80 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-vintage-cream/80 mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
              ) : (
                <>
                  {step === 1 && renderPersonalInfoForm()}
                  {step === 2 && renderRoleSelection()}
                  {step === 3 && renderOTPVerification()}
                </>
              )}

              <button
                type="submit"
                className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                disabled={isLoading}>
                {isLoading
                  ? "Processing..."
                  : isLogin
                  ? "Sign In"
                  : step === 1
                  ? "Continue"
                  : step === 3
                  ? "Verify & Complete"
                  : "Next"}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setStep(1);
                  setFormData({
                    email: "",
                    password: "",
                    fullName: "",
                    phoneNumber: "",
                    role: "",
                    otp: "",
                  });
                }}
                className="text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors">
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>

              {isLogin && (
                <div>
                  <Link
                    to="/forgot-password"
                    className="block text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors mt-2">
                    Forgot your password?
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

