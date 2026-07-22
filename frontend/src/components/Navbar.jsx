import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          E-Shop
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-200 relative flex items-center"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="hover:text-gray-200 font-medium ml-2"
              >
                Hi, {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200 ml-2">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-sm"
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
