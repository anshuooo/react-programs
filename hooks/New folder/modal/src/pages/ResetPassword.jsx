import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Here, you'd send a request to the backend to update the password.
    console.log("Password reset successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
