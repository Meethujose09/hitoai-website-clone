import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css'; // Ensure you include your CSS file for styling

export default function Contact() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>
              HITOAI Limited<br />

              Sandyford, Dublin 18<br />
              Dublin, Ireland

            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; © copyright 2024 by hitoAi - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
