// src/components/Footer.js

import React from "react";
import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Product</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to='/products'>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Plans & Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Frequently asked questions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Lyn</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Job postings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News and articles
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact & Support</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <i className="fas fa-phone"></i>+47 45 80 80 80
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-comments"></i>Live chat
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="fas fa-envelope"></i>Contact us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-star"></i>Give feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="row text-center">
          <div className="col-md-4 box">
            <span className="copyright quick-links">
              Copyright &copy; Lyn Store{" "}
              <script>document.write(new Date().getFullYear())</script>
            </span>
          </div>
          <div className="col-md-4 box">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <Link to=''>
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to=''>
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to=''>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 box">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
              <Link to=''>Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link to=''>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
