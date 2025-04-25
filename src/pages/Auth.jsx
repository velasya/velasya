import { useState } from 'react'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement authentication logic
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-vintage-navy relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-md w-full mx-4">
        <div className="relative">
          <div className="absolute -inset-4 bg-vintage-gold/20 rounded-lg blur-2xl" />
          <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-center mb-8 text-vintage-cream">
              {isLogin ? 'Welcome Back' : 'Join Velasya'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-vintage-cream/80 mb-2">
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
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-vintage-cream/80 mb-2">
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
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-vintage-cream/80 hover:text-vintage-gold text-sm font-medium transition-colors"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth