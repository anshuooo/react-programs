
const Home = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Home</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Discover the best properties available for sale and rent. Your perfect home is just a few clicks away.
        </p>
        <a
          href="/properties"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Browse Listings
        </a>
      </div>
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Buy a Home</h3>
          <p className="text-gray-600 mt-2">Find your perfect home from our listings.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Rent a Home</h3>
          <p className="text-gray-600 mt-2">Explore rental options that fit your budget.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Sell a Home</h3>
          <p className="text-gray-600 mt-2">List your property and reach potential buyers.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
