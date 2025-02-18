import React from 'react';


const Cancel = () => {
  return (
    <div className="cancel-container">
      <h2>Transaction Cancelled</h2>
      <p>Your transaction has been cancelled successfully.</p>
      <button className="home-btn">Home</button>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Cancel;
