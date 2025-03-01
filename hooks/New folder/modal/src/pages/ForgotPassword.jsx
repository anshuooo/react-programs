import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd send a request to the backend to generate a reset link.
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600" htmlFor="email">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
