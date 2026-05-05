import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Home Services', 'Professional Services', 'Education', 'Health & Beauty', 'Automotive'];

  const services = [
    {
      id: 1,
      name: "Electrical Repair Service",
      category: "Home Services",
      rating: 4.8,
      reviews: 156,
      price: "₹300/hour",
      provider: "Raj Electricals",
      location: "Delhi, NCR",
      experience: "8 years",
      avatar: "👨‍🔧",
      description: "Expert electrical repairs, installations, and maintenance for homes and offices.",
      availability: "Available today",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Plumbing Services",
      category: "Home Services",
      rating: 4.9,
      reviews: 203,
      price: "₹250/hour",
      provider: "Quick Fix Plumbing",
      location: "Mumbai, Maharashtra",
      experience: "12 years",
      avatar: "🔧",
      description: "Professional plumbing services including repairs, installations, and emergency fixes.",
      availability: "Available 24/7",
      phone: "+91 98765 43211"
    },
    {
      id: 3,
      name: "Home Cleaning Service",
      category: "Home Services",
      rating: 4.7,
      reviews: 89,
      price: "₹150/room",
      provider: "Sparkle Clean",
      location: "Bangalore, Karnataka",
      experience: "5 years",
      avatar: "🧹",
      description: "Deep cleaning services for homes and offices with eco-friendly products.",
      availability: "Available tomorrow",
      phone: "+91 98765 43212"
    },
    {
      id: 4,
      name: "Math Tutoring",
      category: "Education",
      rating: 4.9,
      reviews: 67,
      price: "₹500/hour",
      provider: "Math Masters",
      location: "Chennai, Tamil Nadu",
      experience: "10 years",
      avatar: "👩‍🏫",
      description: "Expert math tutoring for students from grade 6 to 12, including competitive exam preparation.",
      availability: "Available evenings",
      phone: "+91 98765 43213"
    },
    {
      id: 5,
      name: "Car Repair Service",
      category: "Automotive",
      rating: 4.6,
      reviews: 134,
      price: "₹200/hour",
      provider: "AutoCare Garage",
      location: "Pune, Maharashtra",
      experience: "15 years",
      avatar: "🚗",
      description: "Complete car repair and maintenance services with genuine parts and warranty.",
      availability: "Available today",
      phone: "+91 98765 43214"
    },
    {
      id: 6,
      name: "Salon Services",
      category: "Health & Beauty",
      rating: 4.8,
      reviews: 178,
      price: "₹800/session",
      provider: "Glamour Salon",
      location: "Hyderabad, Telangana",
      experience: "7 years",
      avatar: "💄",
      description: "Professional hair styling, makeup, and beauty treatments with premium products.",
      availability: "Available today",
      phone: "+91 98765 43215"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find Local Services
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Connect with trusted local service providers for all your needs
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
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredServices.length} Services Found
          </h2>
          <p className="text-gray-600">
            Professional services from verified local providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{service.avatar}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">{service.provider}</p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {service.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900 mr-1">
                      {service.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({service.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    {service.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2 text-gray-400" />
                    {service.experience} experience
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <FaClock className="mr-2" />
                    {service.availability}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Book Now
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <FaPhone />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse all services.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Are You a Service Provider?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join LocalKart and connect with customers in your area. Grow your business with our platform.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Become a Service Provider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;