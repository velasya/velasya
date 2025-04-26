import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const { error } = await resetPassword(email);
      if (error) throw error;

      setSuccessMessage(
        "Password reset instructions have been sent to your email.",
      );
      setEmail("");
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage(
        error.message || "An error occurred while sending the reset link",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-vintage-navy relative">
      {/* Background Pattern */}
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
              Reset Your Password
            </h2>

            {successMessage ? (
              <div className="space-y-6">
                <div className="bg-green-500/20 border border-green-500/50 text-vintage-cream p-4 rounded-lg">
                  {successMessage}
                </div>
                <div className="text-center">
                  <Link
                    to="/auth"
                    className="inline-block bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Return to Login
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-500/20 border border-red-500/50 text-vintage-cream p-3 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-vintage-cream/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Send Reset Link"}
                </button>

                <div className="text-center mt-4">
                  <Link
                    to="/auth"
                    className="text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
