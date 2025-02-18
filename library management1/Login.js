import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('user'); // Default to 'user'
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Check if the role matches and navigate accordingly
      if (response.data.role === 'admin') {
        navigate('/admin/dashboard'); // Redirect to admin dashboard
      } else if (response.data.role === 'user') {
        navigate('/user/dashboard'); // Redirect to user dashboard
      } else {
        setError('Unauthorized access');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const toggleRole = () => {
    setRole(role === 'user' ? 'admin' : 'user');
    // Navigate to the correct login page when switching
    if (role === 'user') {
      navigate('/admin/login');
    } else {
      navigate('/login');
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="login-container">
      <div className="role-toggle">
        <button onClick={toggleRole}>
          {role === 'user' ? 'Switch to Admin Login' : 'Switch to User Login'}
        </button>
      </div>

      <div className="login-box">
        <h2>{role === 'admin' ? 'Admin Login' : 'User Login'}</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}

        {/* Back Button */}
        <button onClick={handleBack} className="back-btn">Back</button>
      </div>
    </div>
  );
};

export default Login;
