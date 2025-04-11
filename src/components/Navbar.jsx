import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar d-flex align-items-center justify-content-between px-4">
      {/* Logo */}
      <Link to="/" className="navbar-logo d-flex align-items-center">
        <img
          src="/assets/logo.png"
          alt="Lawberate Logo"
          className="navbar-logo-img"
        />
      </Link>

      {/* Hamburger Menu */}
      <button className="navbar-toggle d-md-none" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links d-flex align-items-center ${menuOpen ? 'd-block' : 'd-none d-md-flex'}`}>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/faq" className="navbar-link">FAQ</Link>
        <Link to="/guides" className="navbar-link">Guides</Link>
        {user ? (
          <>
            <span className="ms-3">Welcome, {user.name}</span>
            <button onClick={logout} className="btn btn-secondary ms-3">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary ms-3">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
