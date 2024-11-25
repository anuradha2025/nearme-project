import React from "react";
import { MapPin, Search, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nutella Chocolate Spread 400g",
    price: "Rs 1,950",
    unit: "1pc",
    location: "5 Puvilingam Pl, Colombo 00800",
    rating: 4.6,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Peanut Butter 500g",
    price: "Rs 1,200",
    unit: "1pc",
    location: "10 Main St, Colombo 00700",
    rating: 4.8,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Strawberry Jam 300g",
    price: "Rs 850",
    unit: "1pc",
    location: "15 Flower Rd, Colombo 00500",
    rating: 4.5,
    image: "https://placehold.co/600x400",
  },
];

const ProductListing = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header Search Bar */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <MapPin className="text-red-500" />
          <span>Select Location</span>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex items-center gap-2">
          <div className="p-1 bg-orange-100 rounded">
            <Search className="text-orange-500 w-4 h-4" />
          </div>
          <span>Select Category</span>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location or search here to get started..."
              className="w-full px-4 py-2 font-light rounded-full border-2 border-gray-300 focus:outline-none focus:border-orange-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-400 text-white p-2 rounded-full">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar Filters */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Sort Results */}
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Sort results by</h3>
              <select className="w-full p-2 bg-gray-50 border rounded text-gray-700">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Filter Ads */}
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Filter ads by</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                    URGENT
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="inline-block px-2 py-1 bg-amber-900 text-white text-xs font-medium rounded">
                    FEATURED
                  </span>
                </label>
              </div>
            </div>

            {/* Type of Poster */}
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Type of poster</h3>
              <select className="w-full p-2 bg-gray-50 border rounded text-gray-700">
                <option>All</option>
                <option>Individual</option>
                <option>Business</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
            >
              <div className="flex">
                <div className="w-1/3 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <span className="text-xl font-bold">
                        {product.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 fill-current ${
                              i < Math.round(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/3 p-6 bg-gradient-to-r from-white to-yellow-300 relative">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <div className="text-2xl text-gray-700 mb-4">
                    {product.price}/
                    <span className="text-sm">{product.unit}</span>
                  </div>
                  <div className="flex items-start gap-2 absolute bottom-3 cursor-pointer">
                    <MapPin className="text-gray-500 mt-1" />
                    <div>
                      <div className="text-gray-500">LOCATION</div>
                      <div className="text-sm text-gray-600">
                        {product.location}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 absolute right-3 bottom-3 bg-white rounded-xl px-4 py-2 text-orange-500 font-medium hover:text-orange-600 hover:-translate-y-1 duration-200">
                    View Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
