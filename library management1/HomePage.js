import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Custom styles

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Library Logo</div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About Us</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to [Library Name]!</h1>
        <p>Your source for a wide range of books. Explore, read, and enjoy.</p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-btn">Login</Link>
          <Link to="/books" className="cta-btn">Browse Books</Link>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for books, authors, or categories..."
        />
      </section>

      {/* Book Categories Section */}
      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <h3>Fiction</h3>
            {/* <img src="/images/fiction-icon.png" alt="Fiction" /> */}
          </div>
          <div className="category-item">
            <h3>Science</h3>
            {/* <img src="/images/science-icon.png" alt="Science" /> */}
          </div>
          <div className="category-item">
            <h3>Economics</h3>
            {/* <img src="/images/economics-icon.png" alt="Economics" /> */}
          </div>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact us: library@domain.com | Follow us on Social Media</p>
        <div className="social-media">
          {/* Social icons */}
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
