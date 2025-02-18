import React, { useState } from 'react';
import './Add.css'; // Import the CSS file

function Add() {
  const [activeSection, setActiveSection] = useState('');
  const [membershipDuration, setMembershipDuration] = useState('');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const handleRadioChange = (event) => {
    setMembershipDuration(event.target.value);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">Chart</div>
        <div className="menu">
          <div className="section" onClick={() => handleClick('membership')}>
            Membership
            {activeSection === 'membership' && (
              <div className="sub-menu">
                <div className="sub-menu-item">Add Membership</div>
                <div className="sub-menu-item">Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('booksMovies')}>
            Books/Movies
            {activeSection === 'booksMovies' && (
              <div className="sub-menu">
                <div className="sub-menu-item">Add</div>
                <div className="sub-menu-item">Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('userManagement')}>
            User Management
            {activeSection === 'userManagement' && (
              <div className="sub-menu">
                <div className="sub-menu-item">Add</div>
                <div className="sub-menu-item">Update</div>
              </div>
            )}
          </div>

          <div className="section" onClick={() => handleClick('logout')}>
            Log Out
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Form Section</h2>
        <p>Selected Section: {activeSection}</p>
        
        {activeSection === 'membership' && (
          <div className="form-container">
            <h3>Add Membership</h3>
            <form>
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="Enter First Name" />

              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Enter Last Name" />

              <label>Contact Name</label>
              <input type="text" name="contactName" placeholder="Enter Contact Name" />

              <label>Contact Address</label>
              <input type="text" name="contactAddress" placeholder="Enter Contact Address" />

              <label>Aadhaar Card No</label>
              <input type="text" name="aadhaar" placeholder="Enter Aadhaar Card No" />

              <label>Start Date</label>
              <input type="date" name="startDate" />

              <label>End Date</label>
              <input type="date" name="endDate" />

              <div className="radio-group">
                <label>Membership Duration</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="6 months"
                      checked={membershipDuration === '6 months'}
                      onChange={handleRadioChange}
                    />
                    6 Months
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="1 year"
                      checked={membershipDuration === '1 year'}
                      onChange={handleRadioChange}
                    />
                    1 Year
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="2 years"
                      checked={membershipDuration === '2 years'}
                      onChange={handleRadioChange}
                    />
                    2 Years
                  </label>
                </div>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Add;
