import React from 'react';

const Updatemem = () => {
  return (
    <div className="update-container">
      <h2>Update Membership</h2>
      <form>
        <div className="form-section">
          <div className="input-group">
            <label>Membership Number:</label>
            <input type="text" placeholder="Enter Membership Number" />
          </div>
          <div className="input-group">
            <label>Start Date:</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>End Date:</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-section">
          <div className="membership-options">
            <label>Membership Extension:</label>
            <div className="radio-group">
              <label><input type="radio" name="extension" /> Six Months</label>
              <label><input type="radio" name="extension" /> One Year</label>
              <label><input type="radio" name="extension" /> Two Years</label>
            </div>
          </div>
          <div className="membership-options">
            <label>Membership Action:</label>
            <div className="radio-group">
              <label><input type="radio" name="action" /> Remove Membership</label>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">Update Membership</button>
        <button type="button" className="logout-btn">Log Out</button>
      </form>
    </div>
  );
};

export default Updatemem;
