const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col justify-between">
      <div>
        <img
          src={product.image_url || "https://via.placeholder.com/150"}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 h-10 overflow-hidden">
          {product.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
