import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(true); // Default is Admin login
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Check if user has the appropriate role
      if (isAdmin && response.data.user.role === 'admin') {
        // Store the JWT token in localStorage
        localStorage.setItem('token', response.data.token);
        // Redirect to the admin dashboard
        navigate('/admin/dashboard');
      } else if (!isAdmin && response.data.user.role === 'user') {
        // If it's a user login and the role is 'user'
        localStorage.setItem('token', response.data.token);
        navigate('/user/dashboard');
      } else {
        setError(isAdmin ? 'You do not have admin privileges.' : 'You do not have user privileges.');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  // Back button functionality to navigate to home page
  const handleBack = () => {
    navigate('/'); // Navigate to the home page '/'
  };

  // Switch between Admin and User Login
  const handleSwitchRole = () => {
    // Navigate directly to the user login page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className="switch-role">
        <button onClick={handleSwitchRole}>
          Switch to User Login
        </button>
      </div>

      {/* Back Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
