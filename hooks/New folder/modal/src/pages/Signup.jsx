import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Create a password" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
