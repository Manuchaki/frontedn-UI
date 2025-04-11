// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const scrollToSimplifySection = () => {
    navigate('/simplify-tool'); // Navigate to the new SimplifyTool page
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          padding: "100px 0",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="hero-title">Simplify Legal Documents with <span className="text-highlight">Ease</span></h1>
              <p className="hero-description">
                Lawberate uses AI to simplify legal documents, identify risks, and boost productivity—without sacrificing accuracy.
              </p>
              <button className="btn btn-primary hero-cta" onClick={scrollToSimplifySection}>
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;