import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, IndianRupee, Plus, Edit, Trash2 } from 'react-icons/fa6';

const SellerDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Demo data (baad mein API se replace kar denge)
  const stats = [
    { title: "Total Products", value: "32", icon: <Package />, color: "bg-blue-600" },
    { title: "Pending Orders", value: "18", icon: <ShoppingBag />, color: "bg-orange-500" },
    { title: "This Month Earnings", value: "₹1,24,850", icon: <IndianRupee />, color: "bg-green-600" },
  ];

  const products = [
    { id: 1, name: "Handmade Rajasthani Dupatta", price: 1299, stock: 23, status: "Active" },
    { id: 2, name: "Pure Organic Honey 1kg", price: 799, stock: 45, status: "Active" },
    { id: 3, name: "Wooden Carved Photo Frame", price: 1899, stock: 8, status: "Low Stock" },
    { id: 4, name: "Kashmiri Saffron 5g", price: 1499, stock: 0, status: "Out of Stock" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome back, <span className="text-blue-600">{user?.username || "Seller"}!</span> 👋
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Here's what's happening with your shop today
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wide">{stat.title}</p>
                  <p className="text-4xl font-bold text-gray-900 mt-4">{stat.value}</p>
                </div>
                <div className={`${stat.color} text-white p-5 rounded-xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Your Products</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-3 transition">
              <Plus className="text-xl" />
              Add New Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-semibold">₹{product.price}</td>
                    <td className="px-8 py-6">{product.stock}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        product.status === "Active" ? "bg-green-100 text-green-800" :
                        product.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-4">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="text-xl" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;