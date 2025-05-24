import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import websiteImg from '../assets/website.jpg'; 
import { FaDownload, FaStar, FaUsers, FaShieldAlt, FaRocket } from 'react-icons/fa'; 
import './Home.css';

function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-page"> 
      <div className="home-container"> 
        
        <div className="hero">
          <div className="hero-text">
            <h1 className={`hero-header ${fadeIn ? 'fade-in' : ''}`}>
              🔓 Unlock a World of Possibilities with Ap'S Modstore!
            </h1>
            <p className={`hero-subheader ${fadeIn ? 'fade-in' : ''}`}>
              Discover premium apps and games, unlocked and absolutely free.
              Enjoy advanced features, an ad-free experience, and exclusive content without hidden fees.
              Your ultimate destination for an enhanced digital life starts here!
            </p>
            <Link to="/apps" className="explore-button">
              Explore Apps Now
            </Link>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
          <div className="hero-image-container">
            <img
              src={websiteImg}
              alt="Ap'S Modstore Banner"
              className="hero-banner"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className={`features-section ${fadeIn ? 'fade-in' : ''}`}>
          <h2 className="section-title">Why Ap'S Modstore is Your Best Choice?</h2>
          <p className="section-description">
            We are dedicated to providing a seamless and secure experience for all your modded app needs.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <FaDownload size={50} color="#1d4ed8" />
              <h3>Instant Downloads</h3>
              <p>Get your favorite apps and games instantly, with no frustrating waiting times.</p>
            </div>
            <div className="feature-item">
              <FaStar size={50} color="#1d4ed8" />
              <h3>Premium Unlocked</h3>
              <p>Access all the premium features and exclusive content without any cost.</p>
            </div>
            <div className="feature-item">
              <FaUsers size={50} color="#1d4ed8" />
              <h3>Vibrant Community</h3>
              <p>Join millions of users who trust Ap'S Modstore for quality and reliability.</p>
            </div>
             <div className="feature-item">
              <FaShieldAlt size={50} color="#1d4ed8" />
              <h3>Safe & Secure</h3>
              <p>All apps are scanned and verified to ensure a safe downloading experience.</p>
            </div>
            <div className="feature-item">
              <FaRocket size={50} color="#1d4ed8" />
              <h3>Blazing Fast</h3>
              <p>Experience super-fast loading and Browse, designed for optimal performance.</p>
            </div>
          </div>
        </div>

        <div className={`download-section ${fadeIn ? 'fade-in' : ''}`}>
          <h2 className="section-title">Ready to Transform Your Digital Experience?</h2>
          <p className="section-description">
            Dive into our vast collection of modded apps and games.
            Everything you need, all in one place, and completely free!
          </p>
          <Link to="/apps" className="download-button">
            Start Your Free Download!
          </Link>
        </div>

        
        <div className="app-footer">
          <p>© {new Date().getFullYear()} Ap'S Modstore | All rights reserved.</p>
          <p>For support or inquiries, contact us at: azeezpasha06@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;