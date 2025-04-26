import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Auth() {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await signIn(email, password);
        if (error) throw error;
        navigate("/dashboard");
      } else {
        const { data, error } = await signUp(email, password, fullName);
        if (error) throw error;
        alert(
          "Registration successful! Please check your email to verify your account.",
        );
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setErrorMessage(
        error.message || "An error occurred during authentication",
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
              {isLogin ? "Welcome Back" : "Join Velasya"}
            </h2>

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

              {!isLogin && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-vintage-cream/80 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="Enter your full name"
                    required
                    disabled={isLoading}
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-vintage-cream/80 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-vintage-cream/20 text-vintage-cream placeholder-vintage-cream/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                disabled={isLoading}
              >
                {isLoading
                  ? "Processing..."
                  : isLogin
                    ? "Sign In"
                    : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>

              {isLogin && (
                <div>
                  <Link
                    to="/forgot-password"
                    className="block text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors mt-2"
                  >
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
