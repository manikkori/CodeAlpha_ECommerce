import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, cartTotal } =
    useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const orderData = {
        cartItems: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalPrice: cartTotal,
      };

      await axios.post(`${apiUrl}/api/orders`, orderData);
      clearCart();
      alert("Order placed successfully!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10 text-xl text-gray-600">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="bg-white rounded shadow p-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image_url || "https://via.placeholder.com/50"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl font-bold">₹{cartTotal.toFixed(2)}</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
