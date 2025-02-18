import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios to make API calls
import './AdminDashboard.css'
const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const [productDetails, setProductDetails] = useState({
    codeFrom: '',
    codeTo: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    // Clear token or any session-related data
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send product data to the backend API
      const response = await axios.post('http://localhost:5000/api/add-product', productDetails);
      setMessage(response.data.message);
      setProductDetails({
        codeFrom: '',
        codeTo: '',
        category: '',
      });
    } catch (error) {
      setError('Failed to add product.');
      console.error(error);
    }
  };

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="nav-links">
        <button onClick={() => navigate('/maintenance')}>Maintenance</button>
        <button onClick={() => navigate('/Report')}>Reports</button>
        <button onClick={() => navigate('/TransactionPage')}>Transactions</button>
      </div>

      <div className="product-details">
        <h2>Product Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Code No From</label>
            <input
              type="text"
              name="codeFrom"
              value={productDetails.codeFrom}
              onChange={handleInputChange}
              placeholder="e.g., SC(B/M)000001"
            />
          </div>
          <div className="form-group">
            <label>Code No To</label>
            <input
              type="text"
              name="codeTo"
              value={productDetails.codeTo}
              onChange={handleInputChange}
              placeholder="e.g., SC(B/M)000004"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={productDetails.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option value="Science">Science</option>
              <option value="Economics">Economics</option>
              <option value="Fiction">Fiction</option>
              <option value="Children">Children</option>
              <option value="Personal Development">Personal Development</option>
            </select>
          </div>

          <button type="submit">Add Product</button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={handleBack}>Back</button>

      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default AdminDashboard;
