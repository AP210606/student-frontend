import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt=""
              className="h-40 object-contain mx-auto"
            />

            <h3 className="font-semibold mt-3 text-sm line-clamp-2">
              {product.title}
            </h3>

            <p className="text-green-600 font-bold mt-2 text-lg">
              ₹{product.price}
            </p>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;