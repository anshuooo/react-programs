import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RealEstate
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
          <Link to="/Login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
