import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios to make API calls
import './UserDashboard.css'; // Add custom CSS for styling

const UserDashboard = () => {
  const navigate = useNavigate();
  
  const [productDetails, setProductDetails] = useState([
    { codeFrom: 'SC(B/M)000001', codeTo: 'SC(B/M)000004', category: 'Science' },
    { codeFrom: 'EC(B/M)000001', codeTo: 'EC(B/M)000004', category: 'Economics' },
    { codeFrom: 'FC(B/M)000001', codeTo: 'FC(B/M)000004', category: 'Fiction' },
    { codeFrom: 'CH(B/M)000001', codeTo: 'CH(B/M)000004', category: 'Children' },
    { codeFrom: 'PD(B/M)000001', codeTo: 'PD(B/M)000004', category: 'Personal Development' },
  ]);
  
  const handleLogout = () => {
    // Clear token or any session-related data
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  // Back button functionality
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>

      <div className="nav-links">
        <button onClick={() => navigate('/user/reports')}>Reports</button>
        <button onClick={() => navigate('/user/transactions')}>Transactions</button>
      </div>

     

      <div className="product-details">
        <h2>Product Details</h2>
        <table>
          <thead>
            <tr>
              <th>Code No From</th>
              <th>Code No To</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((product, index) => (
              <tr key={index}>
                <td>{product.codeFrom}</td>
                <td>{product.codeTo}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={handleBack}>Back</button>

      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserDashboard;
