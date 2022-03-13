import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <a className="navbar-brand text-bold" href="#">
          Winifred Liam
        </a>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skill Set
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="https://peacheshouse.wordpress.com/" className="nav-link">
                Blog
              </a>
            </li>
          </ul>

          <a className="btn btn-sm btn_shadow" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
