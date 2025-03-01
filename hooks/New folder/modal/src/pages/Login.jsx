import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4">
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
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
  <Link to="/forgot-password" className="text-indigo-600 hover:underline">
    Forgot Password?
  </Link>
  </p>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
    
  );
};

export default Login;
