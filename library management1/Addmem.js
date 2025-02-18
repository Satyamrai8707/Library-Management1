import React, { useState } from "react";
import "./Addmem.css";

const Addmem = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactName: "",
    contactAddress: "",
    aadharCardNo: "",
    startDate: "",
    endDate: "",
    membership: "sixMonths",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership Data Submitted:", formData);
    alert("Membership added successfully!");
  };

  return (
    <div className="container">
      <h2>Add Membership</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Contact Name:</label>
          <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Contact Address:</label>
          <input type="text" name="contactAddress" value={formData.contactAddress} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Aadhar Card No:</label>
          <input type="text" name="aadharCardNo" value={formData.aadharCardNo} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>End Date:</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
        </div>

        <div className="membership-options">
          <label>Membership:</label>
          <div className="radio-group">
            <input type="radio" id="sixMonths" name="membership" value="sixMonths" checked={formData.membership === "sixMonths"} onChange={handleChange} />
            <label htmlFor="sixMonths">Six Months</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="oneYear" name="membership" value="oneYear" checked={formData.membership === "oneYear"} onChange={handleChange} />
            <label htmlFor="oneYear">One Year</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="twoYears" name="membership" value="twoYears" checked={formData.membership === "twoYears"} onChange={handleChange} />
            <label htmlFor="twoYears">Two Years</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Addmem;
