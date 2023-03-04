import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav-position">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid justify-content-end">
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/portfolio/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio/experience" className="nav-link ">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio/about"
                  className="nav-link"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
