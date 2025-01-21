import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"; // Updated for your color palette

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="">
          ALCEDO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <a className="dropdown-item" href="">
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Career Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Nutrition
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Psychology
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
