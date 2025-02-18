import React from 'react';

const AddBook = () => {
  return (
    <div className="add-book-container">
      <h2>Add Book/Movie</h2>
      <form>
        <div className="form-section">
          <div className="input-group">
            <label>Select Type:</label>
            <div className="radio-group">
              <label><input type="radio" name="type" /> Book</label>
              <label><input type="radio" name="type" /> Movie</label>
            </div>
          </div>
          <div className="input-group">
            <label>Book/Movie Name:</label>
            <input type="text" placeholder="Enter Name" />
          </div>
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Date of Procurement:</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Quantity/Copies:</label>
            <input type="number" defaultValue="1" min="1" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Add</button>
        <button type="button" className="logout-btn">Log Out</button>
      </form>
    </div>
  );
};

export default AddBook;
