import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details.");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center mt-10">Product not found.</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        &larr; Back to Products
      </button>
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
        <div className="md:w-1/2">
          <img
            src={product.image_url || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            ₹{product.price}
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description ||
              "No description available for this product."}
          </p>
          <div className="mb-6">
            <span className="text-sm text-gray-500">Stock Availability: </span>
            <span
              className={`font-semibold ${product.stock_quantity > 0 ? "text-green-600" : "text-red-600"}`}
            >
              {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock_quantity === 0}
            className="bg-blue-600 text-white py-3 px-6 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
