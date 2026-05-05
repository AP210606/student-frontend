import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaMapMarkerAlt, FaStore, FaShoppingBag } from 'react-icons/fa';

const Sellers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Handmade Crafts', 'Organic Food', 'Home Decor', 'Clothing', 'Services'];

  const sellers = [
    {
      id: 1,
      name: "Artisan Crafts",
      category: "Handmade Crafts",
      rating: 4.8,
      reviews: 234,
      products: 45,
      location: "Jaipur, Rajasthan",
      avatar: "🏺",
      description: "Traditional pottery and handmade crafts with 15+ years of experience.",
      specialties: ["Pottery", "Ceramics", "Handmade Decor"],
      joinedDate: "2022",
      responseTime: "< 2 hours",
      verified: true
    },
    {
      id: 2,
      name: "Farm Fresh Organics",
      category: "Organic Food",
      rating: 4.9,
      reviews: 456,
      products: 32,
      location: "Coorg, Karnataka",
      avatar: "🥬",
      description: "Fresh organic produce directly from our family farm to your table.",
      specialties: ["Organic Vegetables", "Honey", "Spices"],
      joinedDate: "2021",
      responseTime: "< 1 hour",
      verified: true
    },
    {
      id: 3,
      name: "Weavers Collective",
      category: "Clothing",
      rating: 4.7,
      reviews: 189,
      products: 67,
      location: "Varanasi, Uttar Pradesh",
      avatar: "🧵",
      description: "Authentic handloom textiles and traditional clothing from master weavers.",
      specialties: ["Handloom Sarees", "Scarves", "Traditional Wear"],
      joinedDate: "2023",
      responseTime: "< 3 hours",
      verified: true
    },
    {
      id: 4,
      name: "Spice Masters",
      category: "Organic Food",
      rating: 4.6,
      reviews: 312,
      products: 28,
      location: "Kerala",
      avatar: "🌶️",
      description: "Premium quality spices and masalas prepared using traditional methods.",
      specialties: ["Spice Blends", "Masalas", "Herbs"],
      joinedDate: "2022",
      responseTime: "< 4 hours",
      verified: true
    },
    {
      id: 5,
      name: "Home Decor Hub",
      category: "Home Decor",
      rating: 4.8,
      reviews: 167,
      products: 53,
      location: "Mumbai, Maharashtra",
      avatar: "🏠",
      description: "Beautiful home decor items combining traditional and modern designs.",
      specialties: ["Wall Art", "Cushions", "Decorative Items"],
      joinedDate: "2023",
      responseTime: "< 2 hours",
      verified: true
    },
    {
      id: 6,
      name: "Green Valley Farms",
      category: "Organic Food",
      rating: 4.9,
      reviews: 278,
      products: 41,
      location: "Himachal Pradesh",
      avatar: "🌾",
      description: "Sustainable farming practices delivering fresh, organic produce year-round.",
      specialties: ["Organic Fruits", "Vegetables", "Grains"],
      joinedDate: "2021",
      responseTime: "< 1 hour",
      verified: true
    }
  ];

  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || seller.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Trusted Sellers
            </h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Meet the amazing local entrepreneurs and artisans who make LocalKart special
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search sellers by name, location, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Sellers Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredSellers.length} Sellers Found
          </h2>
          <p className="text-gray-600">
            Verified local businesses committed to quality and authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{seller.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="text-lg font-bold text-gray-900 mr-2">
                          {seller.name}
                        </h3>
                        {seller.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        {seller.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {seller.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900">
                        {seller.rating}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {seller.reviews} reviews
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <FaShoppingBag className="text-green-500 mr-1" />
                      <span className="text-sm font-medium text-gray-900">
                        {seller.products}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      products
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    {seller.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaStore className="mr-2 text-gray-400" />
                    Member since {seller.joinedDate}
                  </div>
                  <div className="text-sm text-green-600">
                    Responds in {seller.responseTime}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-1">
                    {seller.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/seller/${seller.id}`}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-center block"
                >
                  View Store
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredSellers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏪</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No sellers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse all sellers.
            </p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              LocalKart by Numbers
            </h2>
            <p className="text-gray-600">
              Growing together with local entrepreneurs across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Sellers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Start your journey as a LocalKart seller and connect with customers who value authentic, local products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              Become a Seller Today
            </Link>
            <Link
              to="/products"
              className="bg-transparent text-white font-bold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;