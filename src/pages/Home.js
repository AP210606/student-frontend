import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [stats, setStats] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [statsRes, categoriesRes, productsRes, testimonialsRes, featuresRes] = await Promise.all([
          axios.get('http://localhost:5000/api/public/stats'),
          axios.get('http://localhost:5000/api/public/categories'),
          axios.get('http://localhost:5000/api/public/featured-products'),
          axios.get('http://localhost:5000/api/public/testimonials'),
          axios.get('http://localhost:5000/api/public/features')
        ]);

        setStats(statsRes.data);
        setCategories(categoriesRes.data.map(cat => ({
          title: cat.name,
          desc: cat.type === 'Product' ? "Unique products from skilled craftsmen" : "Professional services from your neighborhood",
          icon: cat.type === 'Product' ? "🧵" : "💼",
          color: cat.type === 'Product' ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600",
          items: ["Sample Item 1", "Sample Item 2", "Sample Item 3", "Sample Item 4"] // Mock items
        })));
        setFeaturedProducts(productsRes.data);
        setTestimonials(testimonialsRes.data);
        setFeatures(featuresRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Using fallback data.');
        // Set fallback data
        setStats([
          { number: "10,000+", label: "Local Sellers" },
          { number: "50,000+", label: "Happy Customers" },
          { number: "500+", label: "Cities Covered" },
          { number: "4.8★", label: "Average Rating" }
        ]);
        setCategories([
          {
            title: "Handmade Crafts",
            desc: "Unique artisanal products from skilled craftsmen",
            icon: "🧵",
            color: "bg-orange-100 text-orange-600",
            items: ["Pottery", "Textiles", "Jewelry", "Woodwork"]
          },
          {
            title: "Organic Food",
            desc: "Fresh, chemical-free produce from local farms",
            icon: "🥬",
            color: "bg-green-100 text-green-600",
            items: ["Vegetables", "Fruits", "Honey", "Spices"]
          },
          {
            title: "Home Services",
            desc: "Trusted professionals for your home needs",
            icon: "🔧",
            color: "bg-blue-100 text-blue-600",
            items: ["Electricians", "Plumbers", "Carpenters", "Cleaners"]
          },
          {
            title: "Local Services",
            desc: "Professional services from your neighborhood",
            icon: "💼",
            color: "bg-purple-100 text-purple-600",
            items: ["Tutors", "Photographers", "Mechanics", "Tailors"]
          }
        ]);
        setFeaturedProducts([
          {
            id: 1,
            name: "Handmade Pottery Set",
            price: "₹1,200",
            originalPrice: "₹1,500",
            image: "🏺",
            rating: 4.8,
            reviews: 124,
            seller: "Artisan Crafts",
            location: "Jaipur, Rajasthan",
            badge: "Best Seller"
          },
          {
            id: 2,
            name: "Organic Honey 500g",
            price: "₹850",
            originalPrice: "₹950",
            image: "🍯",
            rating: 4.9,
            reviews: 89,
            seller: "Farm Fresh",
            location: "Coorg, Karnataka",
            badge: "Organic"
          },
          {
            id: 3,
            name: "Traditional Spice Mix",
            price: "₹450",
            originalPrice: "₹550",
            image: "🌶️",
            rating: 4.7,
            reviews: 203,
            seller: "Spice Masters",
            location: "Kerala",
            badge: "Authentic"
          },
          {
            id: 4,
            name: "Handloom Cotton Scarf",
            price: "₹2,100",
            originalPrice: "₹2,400",
            image: "🧣",
            rating: 4.6,
            reviews: 67,
            seller: "Weavers Co.",
            location: "Varanasi, UP",
            badge: "Handloom"
          }
        ]);
        setTestimonials([
          {
            name: "Priya Sharma",
            role: "Home Baker",
            location: "Mumbai",
            content: "LocalKart helped me reach customers beyond my neighborhood. My organic cakes now reach families across the city!",
            avatar: "👩‍🍳",
            rating: 5
          },
          {
            name: "Rajesh Kumar",
            role: "Electrician",
            location: "Delhi",
            content: "The platform is easy to use and trustworthy. I've gotten steady work through LocalKart for the past year.",
            avatar: "👨‍🔧",
            rating: 5
          },
          {
            name: "Meera Patel",
            role: "Customer",
            location: "Ahmedabad",
            content: "I love discovering unique handmade products from local artisans. The quality is amazing and prices are fair.",
            avatar: "👩‍💼",
            rating: 5
          }
        ]);
        setFeatures([
          {
            icon: "📍",
            title: "Location-Based Discovery",
            desc: "Find products and services from sellers in your city and nearby areas"
          },
          {
            icon: "💳",
            title: "Secure Payments",
            desc: "Multiple payment options including Cash on Delivery for your convenience"
          },
          {
            icon: "⭐",
            title: "Verified Sellers",
            desc: "All sellers are verified and rated by customers for quality assurance"
          },
          {
            icon: "🚚",
            title: "Fast Delivery",
            desc: "Quick and reliable delivery from local sellers to your doorstep"
          },
          {
            icon: "📞",
            title: "24/7 Support",
            desc: "Round-the-clock customer support to help with any queries"
          },
          {
            icon: "💰",
            title: "Best Prices",
            desc: "Direct-from-seller pricing without middleman markups"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading LocalKart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Discover Amazing{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Local Products
              </span>{" "}
              <span className="text-5xl">🛒</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Connect with trusted local sellers, artisans, and service providers in your city.
              Support local businesses while getting authentic, high-quality products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/products"
                className="group bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center">
                  🛍️ Shop Products
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                to="/services"
                className="group bg-transparent text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                <span className="flex items-center">
                  🔧 Find Services
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search for products or services..."
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  🔍 Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl">
            🛍️
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl">
            🌟
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of authentic local products and professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-2"
              >
                <div className={`w-20 h-20 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.items.map((item, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked products from our most trusted and highly-rated local sellers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    by {product.seller}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    📍 {product.location}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Products
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LocalKart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best experience for both buyers and sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who are part of the LocalKart community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Local Business Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful local sellers who are growing their business with LocalKart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Become a Seller Today
            </Link>
            <Link
              to="/sellers"
              className="bg-transparent text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🛒</span>
                <span className="text-2xl font-bold">LocalKart</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering local economies by connecting authentic sellers with quality-conscious customers across India.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors text-xl" title="Facebook">📘</button>
                <button className="text-gray-400 hover:text-white transition-colors text-xl" title="Twitter">🐦</button>
                <button className="text-gray-400 hover:text-white transition-colors text-xl" title="Instagram">📷</button>
                <button className="text-gray-400 hover:text-white transition-colors text-xl" title="LinkedIn">💼</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Browse Products</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Find Services</Link></li>
                <li><Link to="/sellers" className="hover:text-white transition-colors">Our Sellers</Link></li>
                <li><button className="hover:text-white transition-colors text-left w-full">How It Works</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left w-full">Help Center</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Seller Guidelines</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Safety Tips</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left w-full">About Us</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Careers</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Press</button></li>
                <li><button className="hover:text-white transition-colors text-left w-full">Blog</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LocalKart. All rights reserved. Made with ❤️ for local entrepreneurs.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;