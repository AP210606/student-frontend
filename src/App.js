import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Services from './pages/Services';
import SellerDashboard from './pages/SellerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Seller Only Route */}
          <Route element={<ProtectedRoute allowedRoles={['Seller']} />}>
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;