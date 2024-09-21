// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const styles = {"background-color":"#D2FBFD"}

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Lyn</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/products'>Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/deals'>Deals</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/services'>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-sm btn-outline-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
