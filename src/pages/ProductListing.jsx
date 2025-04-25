import React from 'react'
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'

function ProductListing() {
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
        
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-vintage-cream mb-2">List Your Treasure</h1>
          <p className="text-vintage-cream/60">Share your unique item with our community of collectors</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
          <div className="absolute -inset-4 bg-vintage-gold/20 rounded-lg blur-2xl" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <form className="space-y-8">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-vintage-navy mb-2">
                  Product Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-vintage-navy/10 border-dashed rounded-lg hover:border-vintage-gold/50 transition-colors">
                  <div className="space-y-2 text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-vintage-navy/40" />
                    <div className="flex text-sm text-vintage-navy/60">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-vintage-blue hover:text-vintage-gold">
                        <span>Upload files</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-vintage-navy/60">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-vintage-navy mb-2">
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-3 rounded-full bg-white border border-vintage-navy/10 text-vintage-navy placeholder-vintage-navy/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="Enter a catchy title"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-vintage-navy mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-vintage-navy/10 text-vintage-navy placeholder-vintage-navy/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="Describe your item in detail"
                  />
                </div>
              </div>

              {/* Pricing & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startingPrice" className="block text-sm font-medium text-vintage-navy mb-2">
                    Starting Price ($)
                  </label>
                  <input
                    type="number"
                    id="startingPrice"
                    className="w-full px-4 py-3 rounded-full bg-white border border-vintage-navy/10 text-vintage-navy placeholder-vintage-navy/50 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-vintage-navy mb-2">
                    Auction Duration
                  </label>
                  <select
                    id="duration"
                    className="w-full px-4 py-3 rounded-full bg-white border border-vintage-navy/10 text-vintage-navy focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  >
                    <option value="1">1 day</option>
                    <option value="3">3 days</option>
                    <option value="5">5 days</option>
                    <option value="7">7 days</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-vintage-navy font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  List Your Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing