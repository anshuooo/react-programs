import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remembered your password? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
