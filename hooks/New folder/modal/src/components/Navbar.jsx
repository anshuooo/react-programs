import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">RealEstate</h1>
        <div className="space-x-4">
          <Link to="/Home" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
