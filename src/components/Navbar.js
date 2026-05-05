import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, role, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartCount = cartItems.length;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          🛒 LocalKart
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6">
          
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-blue-600 transition flex items-center"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH SECTION */}
          {isAuthenticated ? (
            <>
              {role === 'Seller' && (
                <Link
                  to="/seller/dashboard"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Dashboard
                </Link>
              )}

              {/* USER */}
              <span className="text-gray-600 text-sm">
                Hi, <span className="font-semibold">{user?.username}</span>
              </span>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;