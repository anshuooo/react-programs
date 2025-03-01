const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Real Estate Hub</h2>
            <p className="text-sm text-gray-400">Find your dream home with us.</p>
          </div>
  
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap gap-4">
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/propertyCard" className="text-gray-300 hover:text-white">PropertyCard</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </nav>
  
          <div>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Real Estate Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  