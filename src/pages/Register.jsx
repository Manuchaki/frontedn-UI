import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration data:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="register-page d-flex">
      {/* Left Section */}
      <div className="register-left d-none d-md-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2>AI-Powered Legal Document Simplification</h2>
          <p>
            Lawberate helps you simplify complex legal documents, identify risks, and make informed decisions with ease. 
            Experience the power of AI to streamline your legal workflows and save time.
          </p>
          <img
            src="/assets/legal-documents.svg" /* Replace with your image path */
            alt="Legal Documents"
            className="img-fluid mt-4"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="register-right">
        <div className="text-center mb-4">
          <h1>Lawberate</h1>
          <h2>Create New Account</h2>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-secondary me-2">Facebook</button>
          <button className="btn btn-secondary me-2">Google</button>
          <button className="btn btn-secondary">SSO</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign up</button>
        </form>
        <p className="text-center mt-4">
          Already a member?{' '}
          <a href="/login" className="text-primary">
            Log in
          </a>
        </p>
        <p className="text-center text-muted mt-2">
          By creating an account, you agree to Lawberate's{' '}
          <a href="/terms-of-service" className="text-primary">Terms of Service</a> and{' '}
          <a href="/privacy-policy" className="text-primary">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Register;
