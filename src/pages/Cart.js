import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="bg-white p-6 rounded shadow text-center">
              Cart is empty
            </div>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-green-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h3 className="text-xl font-bold mb-4">Price Details</h3>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Final</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;