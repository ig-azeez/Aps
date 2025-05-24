// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS for this page

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Attempting registration with:', { username, email, password });

    // --- IMPORTANT: This is where your backend API call for registration would go ---
    // In a real application, you would send this data to your backend for user creation.
    // The backend would:
    // 1. Validate inputs (email format, password strength, unique username/email).
    // 2. Hash the password (e.g., using bcrypt) before storing it.
    // 3. Save the new user's data (hashed password, username, email) to your MongoDB database.
    // 4. Respond with success or error.

    try {
      const response = await fetch('/api/register', { // Replace with your actual backend registration endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful! Please log in with your new account.');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.message);
        alert(`Registration failed: ${errorData.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again later.');
    }
    // --- End of backend API call placeholder ---
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2 className="register-title">Create Your Ap'S Modstore Account</h2>
        <p className="register-subtitle">Join us to unlock a world of possibilities!</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="register-button-submit">
            Sign Up
          </button>
        </form>

        <div className="register-links">
          <p>Already have an account? <Link to="/login" className="login-link">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;