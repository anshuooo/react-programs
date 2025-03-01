const Profile = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">User Profile</h1>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">johndoe@example.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Account Created</h3>
              <p className="text-gray-600">January 1, 2023</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Profile;
  