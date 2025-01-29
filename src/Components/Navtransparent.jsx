import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import capoLogo from '../Assets/Images/CapoBiz-LOGO.avif'

function Navtransparent() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => setCollapsed(true);

  const activeLink = (link) => {
    return location.pathname === link ? 'active' : '';
  };

  return (
    <div>
      <nav className="navbar navtrans navbar-expand-lg">
        <div className="container-fluid main-nav px-4 py-1">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={capoLogo} alt="capobiz-point-of-sale-software-logo" className="img-fluid logo" />
          </Link>
          <button
            className={`navbar-toggler ${collapsed ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse menu-bar ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" onClick={closeNavbar}>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/')}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/about')}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/pos-features')}`} to="/pos-features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/pos-industries')}`} to="/pos-industries">
                  Industry Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/blog')}`} to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink('/contact')}`} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="demo-button">
              <Link to="/pos-demo">
                <button className="site-demo-button" onClick={closeNavbar}>
                  Get Free Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navtransparent;




