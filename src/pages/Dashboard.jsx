import React from 'react'

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Auctions</h2>
          <p className="text-gray-600">No active auctions</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Bids</h2>
          <p className="text-gray-600">No active bids</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
          <p className="text-gray-600">Welcome to your dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard