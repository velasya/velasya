import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const [bidAmount, setBidAmount] = useState('')

  // Placeholder data - would be fetched from API in real implementation
  const product = {
    id: id,
    title: "Vintage Camera",
    description: "A beautiful vintage camera in excellent condition. Perfect for collectors or photography enthusiasts.",
    currentBid: 150,
    startingPrice: 100,
    endTime: "2024-03-01T15:00:00Z",
    seller: "JohnDoe",
    images: ["https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
    bids: [
      { amount: 150, bidder: "Alice", time: "2024-02-20T10:30:00Z" },
      { amount: 125, bidder: "Bob", time: "2024-02-20T09:15:00Z" },
      { amount: 100, bidder: "Charlie", time: "2024-02-20T08:00:00Z" }
    ]
  }

  const handleBidSubmit = (e) => {
    e.preventDefault()
    // Handle bid submission logic here
    console.log('Bid submitted:', bidAmount)
  }

  return (
    <div id='1pro' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>

          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Current Bid</p>
                <p className="text-2xl font-bold text-primary-600">${product.currentBid}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Auction Ends</p>
                <p className="text-lg font-semibold">
                  {format(new Date(product.endTime), 'PPp')}
                </p>
              </div>
            </div>

            {/* Bid Form */}
            <form onSubmit={handleBidSubmit} className="mt-4">
              <div className="flex gap-2">
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  min={product.currentBid + 1}
                  step="0.01"
                  placeholder="Enter bid amount"
                  className="input-field flex-1"
                />
                <button type="submit" className="btn-primary">
                  Place Bid
                </button>
              </div>
            </form>
          </div>

          {/* Bid History */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Bid History</h2>
            <div className="space-y-3">
              {product.bids.map((bid, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{bid.bidder}</span>
                  <span className="font-medium">${bid.amount}</span>
                  <span className="text-gray-500">
                    {format(new Date(bid.time), 'PP')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Info */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              Listed by <span className="font-medium">{product.seller}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail