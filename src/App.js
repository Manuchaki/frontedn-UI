import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import FAQ from './pages/FAQ.jsx';
import Guides from './pages/Guides.jsx'; // Ensure this path is correct
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Simplify from './pages/Simplify.jsx'; // Fixed import
import SimplifyTool from './pages/SimplifyTool.jsx'; // Import the new page
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx'; // Fixed import

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/simplify" element={<Simplify />} />
        <Route path="/simplify-tool" element={<SimplifyTool />} /> {/* Add new route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
