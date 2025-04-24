import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
} from '@heroicons/react/24/outline'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'History', path: '/history' },
    { name: 'Exclusive', path: '/exclusive' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="relative">
        {/* Centered Logo - absolute positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-16 flex items-center z-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-vintage-navy">Velasya</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side navigation links - desktop */}
            <div className="hidden md:flex items-center pl-4">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-vintage-navy hover:text-vintage-gold transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Invisible center element to maintain spacing */}
            <div className="hidden md:block">
              <div className="w-32"></div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end w-full">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-vintage-navy hover:text-vintage-blue hover:bg-vintage-cream"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Right side button - desktop */}
            <div className="hidden md:flex items-center">
              <Link to="/auth" className="btn-primary flex items-center">
                <UserCircleIcon className="h-5 w-5 mr-1" />
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg z-10">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2.5 text-base font-medium text-vintage-navy hover:text-vintage-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-vintage-navy/10">
                <Link
                  to="/auth"
                  className="btn-primary w-full flex items-center justify-center mt-2"
                >
                  <UserCircleIcon className="h-5 w-5 mr-1" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar