const About = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About Real Estate Hub</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Real Estate Hub is your trusted partner in finding the perfect home. With years of
            experience in the industry, we offer a wide range of properties to meet all your needs,
            whether you are buying, selling, or renting.
          </p>
          <div className="flex justify-center gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To provide a seamless and stress-free property buying and selling experience for our clients.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800">Why Choose Us?</h3>
              <p className="text-gray-600 mt-2">
                We offer expert advice, a vast property portfolio, and dedicated support to ensure you
                find the right home at the right price.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  