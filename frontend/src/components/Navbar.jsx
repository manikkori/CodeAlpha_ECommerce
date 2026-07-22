import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="text-2xl font-bold">
          Manik's Store
        </Link>

        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center mt-4 md:mt-0 gap-4 md:gap-6 flex-col md:flex-row transition-all`}
        >
          <Link to="/" className="block py-2 md:py-0 hover:text-gray-200">
            Home
          </Link>

          <Link
            to="/cart"
            className="block py-2 md:py-0 hover:text-gray-200 relative w-max"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0 border-t md:border-t-0 border-blue-500 pt-2 md:pt-0">
              <Link
                to="/profile"
                className="hover:text-gray-200 font-medium block"
              >
                Hi, {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1.5 rounded hover:bg-red-600 text-sm w-max"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0 border-t md:border-t-0 border-blue-500 pt-2 md:pt-0">
              <Link to="/login" className="hover:text-gray-200 py-1 block">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 px-4 py-1.5 rounded hover:bg-green-600 text-sm w-max block text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
