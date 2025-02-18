import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <div className="success-container">
      <h2>Transaction Completed Successfully</h2>
      <p>Your transaction has been processed successfully.</p>
      <button className="home-btn">Home</button>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Success;
