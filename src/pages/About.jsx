
import React from 'react';
import './About.css'; 
import myLogo from '/JS project/my-react-app/mylogo.png'; 

function About() {
  return (
    <div className="about-page-container">
      <div className="about-content-box">
        <img src={myLogo} alt="Ap'S Modstore Logo" className="about-logo" />
        <h1 className="about-title">About Ap'S Modstore</h1>

        <p className="about-description">
          Welcome to <strong>Ap'S Modstore</strong> — your ultimate destination for high-quality, trusted modded apps and games!
          <br /><br />
          We believe in unlocking the full potential of your favorite applications without limits. Our goal is to provide safe, fast, and completely free access to premium features, unlocked content, and enhanced versions of the apps you love — all in one place.
          <br /><br />
          Whether you're a gamer looking for extra firepower, a creator seeking unlocked tools, or just someone who loves trying out premium content without paying a dime, Ap'S Modstore has something for you.
        </p>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p className="about-description">
            We’re a dedicated team of tech enthusiasts and digital freedom advocates who believe that access to enhanced digital experiences should never be restricted. We meticulously handpick and rigorously test every mod before it's listed, ensuring both your safety and satisfaction. Our commitment is to provide a seamless and secure platform where you can explore and enjoy premium content with confidence.
            <br /><br />
            Join thousands of happy users today — because at Ap'S Modstore, we empower your digital journey with freedom and fun.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;