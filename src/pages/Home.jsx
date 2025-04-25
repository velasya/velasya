import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon, 
  ArrowRightIcon, 
  StarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  UserPlusIcon,
  CameraIcon,
  SparklesIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

function Home() {
  const [activeTab, setActiveTab] = useState('open')
  
  const liveAuctions = [
    {
      id: 1,
      title: "Vintage Leica M3 Camera",
      image: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 1250,
      endTime: "2024-03-01T15:00:00Z",
      category: "Collectibles",
      bids: 23,
      timeLeft: "2h 15m"
    },
    {
      id: 2,
      title: "Antique Brass Compass",
      image: "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 380,
      endTime: "2024-03-02T10:00:00Z",
      category: "Antiques",
      bids: 15,
      timeLeft: "4h 30m"
    },
    {
      id: 3,
      title: "1960s Vinyl Record Player",
      image: "https://images.pexels.com/photos/3645420/pexels-photo-3645420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 890,
      endTime: "2024-03-03T20:00:00Z",
      category: "Electronics",
      bids: 31,
      timeLeft: "1h 45m"
    }
  ]

  const upcomingAuctions = [
    {
      id: 1,
      title: "Sunset Bliss",
      image: "https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      auctionDate: "Nov 12"
    },
    {
      id: 2,
      title: "Ancient Grace",
      image: "https://images.pexels.com/photos/134402/pexels-photo-134402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      auctionDate: "Nov 15"
    },
    {
      id: 3,
      title: "Timeless Elegance",
      image: "https://images.pexels.com/photos/9428799/pexels-photo-9428799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      auctionDate: "Nov 18"
    },
    {
      id: 4,
      title: "Vintage Cruiser",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      auctionDate: "Nov 20"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-vintage-navy min-h-[85vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-vintage-gold/10 backdrop-blur-sm">
              <p className="text-vintage-gold text-sm font-medium">
                Over 10,000+ unique items sold last month
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Discover Rare <span className="text-vintage-gold">Treasures</span> & Bid to Win
            </h1>
            
            <p className="text-xl text-vintage-cream/80 max-w-xl">
              Join the most exclusive auction marketplace for collectors and enthusiasts. Every piece tells a story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/auth" 
                className="btn-primary bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy text-lg px-8 py-4 rounded-full flex items-center justify-center group"
              >
                Start Bidding
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/auth" 
                className="btn-primary border-2 border-vintage-cream/20 text-vintage-cream hover:bg-white/5 text-lg px-8 py-4 rounded-full backdrop-blur-sm"
              >
                List Your Items
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-vintage-cream/10">
              <div>
                <p className="text-3xl font-bold text-vintage-gold">50K+</p>
                <p className="text-vintage-cream/60">Active Bidders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-vintage-gold">95%</p>
                <p className="text-vintage-cream/60">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-vintage-gold">24/7</p>
                <p className="text-vintage-cream/60">Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-vintage-gold/20 rounded-lg blur-2xl" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Auction Item" 
                className="w-full h-full object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">Current Auction</p>
                    <p className="text-vintage-gold text-lg font-bold">$4,250.00</p>
                  </div>
                  <div className="bg-vintage-gold text-vintage-navy px-3 py-1 rounded-full">
                    <p className="text-sm font-semibold">05:23:11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Auctions */}
      <div className="bg-vintage-navy py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-vintage-cream">Live Auctions</h2>
            <Link to="/auth" className="flex items-center text-vintage-gold hover:text-vintage-cream transition-colors">
              View All <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {liveAuctions.map((auction) => (
              <Link key={auction.id} to="/auth" className="relative group">
                <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20">
                  <div className="relative overflow-hidden">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 bg-vintage-gold text-vintage-navy px-3 py-1 m-2 rounded-full">
                      <p className="text-sm font-semibold">{auction.timeLeft}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold">{auction.bids} active bids</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-vintage-cream group-hover:text-vintage-gold transition-colors">
                      {auction.title}
                    </h3>
                    <p className="text-vintage-cream/70 mb-4">{auction.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-vintage-gold font-bold text-lg">
                        ${auction.currentBid.toLocaleString()}
                      </p>
                      <button className="bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy px-4 py-2 rounded-full font-medium transition-all duration-300 transform group-hover:-translate-y-1">
                        Place Bid
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Auctions Section */}
      <div className="bg-vintage-navy/95 py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-vintage-cream text-center mb-12">Upcoming Auctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingAuctions.map((auction) => (
              <div key={auction.id} className="group relative">
                <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20">
                  <div className="relative">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-vintage-cream group-hover:text-vintage-gold transition-colors">
                      {auction.title}
                    </h3>
                    <p className="text-sm text-vintage-cream/70 mb-4">
                      Auction Date: {auction.auctionDate}
                    </p>
                    <button className="w-full bg-vintage-gold/10 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-navy py-2 rounded-full font-medium transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-vintage-navy border-t border-white/10 py-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-vintage-cream mb-4">About Velasya</h3>
              <p className="text-vintage-cream/80">
                Your trusted destination for unique collectibles and vintage treasures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-vintage-cream mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-vintage-cream/80 hover:text-vintage-gold">About Us</Link></li>
                <li><Link to="/contact" className="text-vintage-cream/80 hover:text-vintage-gold">Contact</Link></li>
                <li><Link to="/terms" className="text-vintage-cream/80 hover:text-vintage-gold">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-vintage-cream/80 hover:text-vintage-gold">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-vintage-cream mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/category/antiques" className="text-vintage-cream/80 hover:text-vintage-gold">Antiques</Link></li>
                <li><Link to="/category/collectibles" className="text-vintage-cream/80 hover:text-vintage-gold">Collectibles</Link></li>
                <li><Link to="/category/vintage" className="text-vintage-cream/80 hover:text-vintage-gold">Vintage</Link></li>
                <li><Link to="/category/art" className="text-vintage-cream/80 hover:text-vintage-gold">Art</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-vintage-cream mb-4">Newsletter</h3>
              <p className="text-vintage-cream/80 mb-4">Stay updated with our latest auctions</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full bg-white/10 text-vintage-cream placeholder-vintage-cream/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-vintage-gold flex-1"
                />
                <button className="bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy px-4 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-vintage-cream/20 mt-8 pt-8 text-center text-vintage-cream/60">
            <p>&copy; {new Date().getFullYear()} Velasya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home