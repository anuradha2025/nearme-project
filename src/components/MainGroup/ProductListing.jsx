import React, { useState, useEffect } from "react";
import { MapPin, Search, Star } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const products = [
  {
    id: 1,
    name: "Nutella Chocolate Spread 400g",
    price: 1950,
    unit: "1pc",
    location: "5 Puvilingam Pl, Colombo 00800",
    rating: 4.6,
    image: "https://placehold.co/600x400",
    adType: "URgENT",
    posterType: "individual",
    category: "food",
  },
  {
    id: 2,
    name: "Smartphone XYZ",
    price: 45000,
    unit: "1pc",
    location: "10 Main St, Colombo 00700",
    rating: 4.8,
    image: "https://placehold.co/600x400",
    adType: "FEaTURED",
    posterType: "business",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Luxury Apartment",
    price: 15000000,
    unit: "1 unit",
    location: "15 Flower Rd, Colombo 00500",
    rating: 4.5,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Property",
  },
  {
    id: 4,
    name: "Used Car",
    price: 2500000,
    unit: "1 unit",
    location: "20 Park St, Colombo 00200",
    rating: 4.7,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Vehicles",
  },
  {
    id: 5,
    name: "Plumbing Services",
    price: 5000,
    unit: "per hour",
    location: "25 Lake Rd, Colombo 00300",
    rating: 4.9,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Services",
  },
  {
    id: 6,
    name: "Garden Furniture Set",
    price: 12000,
    unit: "1 set",
    location: "30 Hill St, Colombo 00400",
    rating: 4.4,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Home & Garden",
  },
  {
    id: 7,
    name: "Golden Retriever Puppy",
    price: 30000,
    unit: "1pc",
    location: "35 Lake Rd, Colombo 00300",
    rating: 4.8,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Animals",
  },
  {
    id: 8,
    name: "Designer Dress",
    price: 8000,
    unit: "1pc",
    location: "40 Park St, Colombo 00200",
    rating: 4.6,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Fashion & Beauty",
  },
  {
    id: 9,
    name: "Handmade Jewelry",
    price: 1500,
    unit: "1pc",
    location: "45 Flower Rd, Colombo 00500",
    rating: 4.7,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Fashion & Beauty",
  },
  {
    id: 10,
    name: "Organic Honey 250g",
    price: 700,
    unit: "1pc",
    location: "50 Main St, Colombo 00700",
    rating: 4.5,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "food",
  },
  {
    id: 11,
    name: "Electric Kettle",
    price: 3500,
    unit: "1pc",
    location: "55 Puvilingam Pl, Colombo 00800",
    rating: 4.4,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Electronics",
  },
  {
    id: 12,
    name: "Office Space for Rent",
    price: 50000,
    unit: "per month",
    location: "60 Hill St, Colombo 00400",
    rating: 4.8,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Property",
  },
  {
    id: 13,
    name: "Mountain Bike",
    price: 45000,
    unit: "1pc",
    location: "65 Lake Rd, Colombo 00300",
    rating: 4.7,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Vehicles",
  },
  {
    id: 14,
    name: "Cleaning Services",
    price: 2000,
    unit: "per hour",
    location: "70 Park St, Colombo 00200",
    rating: 4.6,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Services",
  },
  {
    id: 15,
    name: "Lawn Mower",
    price: 15000,
    unit: "1pc",
    location: "75 Flower Rd, Colombo 00500",
    rating: 4.5,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Home & Garden",
  },
  {
    id: 16,
    name: "Persian Cat",
    price: 25000,
    unit: "1pc",
    location: "80 Main St, Colombo 00700",
    rating: 4.4,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Animals",
  },
  {
    id: 17,
    name: "Makeup Kit",
    price: 5000,
    unit: "1pc",
    location: "85 Puvilingam Pl, Colombo 00800",
    rating: 4.8,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Fashion & Beauty",
  },
  {
    id: 18,
    name: "Yoga Mat",
    price: 1500,
    unit: "1pc",
    location: "90 Hill St, Colombo 00400",
    rating: 4.7,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Other",
  },
  {
    id: 19,
    name: "Gaming Laptop",
    price: 150000,
    unit: "1pc",
    location: "95 Lake Rd, Colombo 00300",
    rating: 4.6,
    image: "https://placehold.co/600x400",
    adType: "urgent",
    posterType: "individual",
    category: "Electronics",
  },
  {
    id: 20,
    name: "Digital Marketing Services",
    price: 10000,
    unit: "per project",
    location: "100 Park St, Colombo 00200",
    rating: 4.5,
    image: "https://placehold.co/600x400",
    adType: "featured",
    posterType: "business",
    category: "Services",
  },
];

const ProductListing = ({ searchText, selectedCategories }) => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [sortOption, setSortOption] = useState("Best Match");
  const [adTypeFilter, setAdTypeFilter] = useState([]);
  const [posterTypeFilter, setPosterTypeFilter] = useState("All");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleAdTypeChange = (e) => {
    const { value, checked } = e.target;
    setAdTypeFilter((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  const handlePosterTypeChange = (e) => {
    setPosterTypeFilter(e.target.value);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          selectedCategories.some(
            (category) =>
              product.category.toLowerCase() === category.value.toLowerCase()
          )) &&
        (adTypeFilter.length === 0 ||
          adTypeFilter.includes(product.adType.toLowerCase())) &&
        (posterTypeFilter === "All" ||
          product.posterType.toLowerCase() === posterTypeFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") {
        return a.price - b.price;
      } else if (sortOption === "Price: High to Low") {
        return b.price - a.price;
      }
      return 0; // Best Match (default)
    });

  return (
    <div className="max-w-7xl rounded-2xl mx-auto p-4 mt-3 bg-gray-100 min-h-screen z-40">
      <div className="flex gap-8">
        {/* Left Sidebar Filters */}
        <div className="w-64 flex-shrink-0">
          {/* Map Preview */}
          <div className="mb-6">
            <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "200px" }}
                center={currentLocation}
                zoom={15}
              >
                <Marker position={currentLocation} />
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="space-y-6">
            {/* Sort Results */}
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Sort results by</h3>
              <select
                className="w-full p-2 bg-gray-50 border rounded text-gray-700"
                value={sortOption}
                onChange={handleSortChange}
              >
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
                  <input
                    type="checkbox"
                    value="urgent"
                    className="rounded border-gray-300"
                    onChange={handleAdTypeChange}
                  />
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                    URGENT
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="featured"
                    className="rounded border-gray-300"
                    onChange={handleAdTypeChange}
                  />
                  <span className="inline-block px-2 py-1 bg-amber-900 text-white text-xs font-medium rounded">
                    FEATURED
                  </span>
                </label>
              </div>
            </div>

            {/* Type of Poster */}
            <div>
              <h3 className="text-sm text-gray-600 mb-2">Type of poster</h3>
              <select
                className="w-full p-2 bg-gray-50 border rounded text-gray-700"
                value={posterTypeFilter}
                onChange={handlePosterTypeChange}
              >
                <option>All</option>
                <option>Individual</option>
                <option>Business</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          {filteredProducts.map((product) => (
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
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-90 text-white px-3 py-1 rounded-full">
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
                    Rs {product.price}/
                    <span className="text-sm">{product.unit}</span>
                  </div>
                  <div className="flex">
                    <div className="flex items-start gap-2 cursor-pointer mt-auto">
                      <MapPin className="text-gray-500 mt-1" />
                      <div>
                        <div className="text-gray-500">LOCATION</div>
                        <div className="text-sm text-gray-600">
                          {product.location}
                        </div>
                      </div>
                    </div>
                    <button className="mt-auto ms-auto bg-white rounded-xl px-4 py-2 text-orange-500 font-medium hover:text-orange-600 hover:-translate-y-1 duration-200">
                      View Shop
                    </button>
                  </div>
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
