import React from 'react';

const UserManage = () => {
  return (
    <div className="user-manage-container">
      <h2>User Management</h2>
      <form>
        <div className="form-section">
          <div className="input-group">
            <label>User Type:</label>
            <div className="radio-group">
              <label><input type="radio" name="userType" /> New User</label>
              <label><input type="radio" name="userType" /> Existing User</label>
            </div>
          </div>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="input-group">
            <label>Status:</label>
            <label className="checkbox-label">
              <input type="checkbox" /> Active
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Admin Access:</label>
            <label className="checkbox-label">
              <input type="checkbox" /> Admin
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="logout-btn">Log Out</button>
      </form>
    </div>
  );
};

export default UserManage;
