import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication logic
    onLogin({ username: credentials.username, token: 'fake-jwt-token' });
    navigate('/');
  };

  return (
    <div className="login-page d-flex">
      {/* Left Section */}
      <div className="login-left d-none d-md-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2>Welcome Back to Lawberate</h2>
          <p>
            Simplify your legal documents, identify risks, and make informed decisions with ease. 
            Log in to access your personalized dashboard and continue simplifying your legal workflows.
          </p>
          <img
            src="/assets/login-illustration.svg" /* Replace with your image path */
            alt="Login Illustration"
            className="img-fluid mt-4"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="text-center mb-4">
          <h1>Lawberate</h1>
          <h2>Log In</h2>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-primary">
            Register here
          </a>
        </p>
        <p className="text-center text-muted mt-2">
          By logging in, you agree to Lawberate's{' '}
          <a href="/terms-of-service" className="text-primary">Terms of Service</a> and{' '}
          <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
