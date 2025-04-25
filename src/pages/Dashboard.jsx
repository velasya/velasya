import React from 'react'
import { 
  ChartBarIcon, 
  ClockIcon, 
  HeartIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

function Dashboard() {
  const stats = [
    { id: 1, name: 'Active Bids', value: '12', icon: HeartIcon },
    { id: 2, name: 'Won Auctions', value: '8', icon: ChartBarIcon },
    { id: 3, name: 'Watching', value: '24', icon: ClockIcon },
    { id: 4, name: 'Total Spent', value: '$2,450', icon: CurrencyDollarIcon },
  ]

  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Header Section */}
      <div className="bg-vintage-navy py-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-vintage-cream mb-2">Dashboard</h1>
          <p className="text-vintage-cream/60">Welcome back, let's check your auction status</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="relative group">
              <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center">
                  <div className="bg-vintage-gold/10 rounded-full p-3">
                    <stat.icon className="h-6 w-6 text-vintage-gold" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-vintage-navy/60">{stat.name}</p>
                    <p className="text-2xl font-bold text-vintage-navy">{stat.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Active Auctions */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-vintage-navy mb-4">My Active Auctions</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-vintage-navy/10">
                    <div>
                      <p className="font-medium text-vintage-navy">Vintage Camera #{item}</p>
                      <p className="text-sm text-vintage-navy/60">Current Bid: $150</p>
                    </div>
                    <span className="text-vintage-gold font-medium">2h 15m left</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Bids */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-vintage-navy mb-4">Recent Bids</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-vintage-navy/10">
                    <div>
                      <p className="font-medium text-vintage-navy">Antique Clock #{item}</p>
                      <p className="text-sm text-vintage-navy/60">Your Bid: $250</p>
                    </div>
                    <span className="text-vintage-blue font-medium">Outbid</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-vintage-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-vintage-navy mb-4">Watchlist</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-vintage-navy/10">
                    <div>
                      <p className="font-medium text-vintage-navy">Vintage Record #{item}</p>
                      <p className="text-sm text-vintage-navy/60">Current Bid: $75</p>
                    </div>
                    <button className="text-vintage-gold hover:text-vintage-navy transition-colors">
                      <HeartIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard