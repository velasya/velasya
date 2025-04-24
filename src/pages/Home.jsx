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
  
  const featuredAuctions = [
    {
      id: 1,
      title: "Vintage Leica M3 Camera",
      image: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 1250,
      endTime: "2024-03-01T15:00:00Z",
      category: "Collectibles",
      bids: 23
    },
    {
      id: 2,
      title: "Antique Brass Compass",
      image: "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 380,
      endTime: "2024-03-02T10:00:00Z",
      category: "Antiques",
      bids: 15
    },
    {
      id: 3,
      title: "1960s Vinyl Record Player",
      image: "https://images.pexels.com/photos/3645420/pexels-photo-3645420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      currentBid: 890,
      endTime: "2024-03-03T20:00:00Z",
      category: "Electronics",
      bids: 31
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-vintage-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover & Bid on Unique Treasures
          </h1>
          <p className="text-xl text-vintage-cream/80 max-w-2xl mx-auto mb-8">
            Join thousands of collectors and enthusiasts in the most exciting online auction marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth" className="btn-primary bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy text-lg px-8 py-3">
              Start Bidding Now
            </Link>
            <Link to="/auth" className="btn-secondary border-vintage-cream/20 text-vintage-cream hover:bg-vintage-navy/50 text-lg px-8 py-3">
              List Your Items
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-vintage-cream py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ShieldCheckIcon className="h-12 w-12 text-vintage-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-vintage-navy mb-2">Secure Bidding</h3>
              <p className="text-vintage-navy/70">Protected transactions and verified sellers for your peace of mind</p>
            </div>
            <div className="text-center p-6">
              <StarIcon className="h-12 w-12 text-vintage-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-vintage-navy mb-2">Unique Items</h3>
              <p className="text-vintage-navy/70">Discover one-of-a-kind pieces you won't find anywhere else</p>
            </div>
            <div className="text-center p-6">
              <CurrencyDollarIcon className="h-12 w-12 text-vintage-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-vintage-navy mb-2">Fair Pricing</h3>
              <p className="text-vintage-navy/70">Competitive bidding ensures fair market values</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Auctions */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-vintage-navy">Featured Auctions</h2>
            <Link to="/auth" className="flex items-center text-vintage-blue hover:text-vintage-gold transition-colors">
              View All <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAuctions.map((auction) => (
              <Link key={auction.id} to="/auth" className="card group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">{auction.bids} active bids</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-vintage-navy group-hover:text-vintage-blue transition-colors">
                  {auction.title}
                </h3>
                <p className="text-vintage-navy/70 mb-2">{auction.category}</p>
                <div className="flex justify-between items-center">
                  <p className="text-vintage-gold font-bold text-lg">
                    ${auction.currentBid.toLocaleString()}
                  </p>
                  <p className="text-sm text-vintage-navy/60">
                    Ends {new Date(auction.endTime).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-vintage-blue py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Auction Journey?
          </h2>
          <p className="text-vintage-cream/80 text-lg mb-8">
            Join our community of passionate collectors and sellers today. Create an account to start bidding or listing your items.
          </p>
          <Link to="/auth" className="btn-primary bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy text-lg px-8 py-3">
            Create Free Account
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-vintage-cream to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-vintage-navy mb-4">
              How Velasya Works
            </h2>
            <p className="text-xl text-vintage-navy/70">
              No rocket science here! Just four simple steps to auction greatness 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="card text-center p-6 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-vintage-gold/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-vintage-gold/20 transition-colors">
                  <UserPlusIcon className="h-8 w-8 text-vintage-gold" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-navy mb-2">1. Join the Squad</h3>
                <p className="text-vintage-navy/70">
                  Sign up in like 30 seconds (for real). No essay writing required! 📝
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="card text-center p-6 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-vintage-gold/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-vintage-gold/20 transition-colors">
                  <CameraIcon className="h-8 w-8 text-vintage-gold" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-navy mb-2">2. Snap & List</h3>
                <p className="text-vintage-navy/70">
                  Got cool stuff? Show it off! Add pics and set your starting bid 📸
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="card text-center p-6 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-vintage-gold/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-vintage-gold/20 transition-colors">
                  <SparklesIcon className="h-8 w-8 text-vintage-gold" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-navy mb-2">3. Watch the Magic</h3>
                <p className="text-vintage-navy/70">
                  Sit back while others bid. Maybe do a little victory dance? 💃
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="card text-center p-6 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-vintage-gold/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-vintage-gold/20 transition-colors">
                  <BanknotesIcon className="h-8 w-8 text-vintage-gold" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-navy mb-2">4. Get Paid</h3>
                <p className="text-vintage-navy/70">
                  Cha-ching! Money hits your account faster than you can say "sold!" 💸
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-vintage-navy/70 mb-6">
              Fun fact: Our users made over $1M last month just by selling stuff they weren't using anymore. 
              <br />Time to check your closet? 👀
            </p>
            <Link to="/auth" className="btn-primary bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy text-lg px-8 py-3 inline-flex items-center">
              Start Your Journey <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home