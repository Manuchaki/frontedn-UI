import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Lawberate. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </div>
      <div className="social-links mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
