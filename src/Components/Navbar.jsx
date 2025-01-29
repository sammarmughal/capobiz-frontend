import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import capoLogo from '../Assets/Images/CapoBiz-LOGO.avif';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef()
  const user = JSON.parse(sessionStorage.getItem("signUser") || "{}");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleNav = (e) => {
      if (window.innerWidth <= 768 && !collapsed) {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setCollapsed(!collapsed)
        }
      }
    }
    document.body.addEventListener("click", handleNav)
    return (() => {
      document.body.removeEventListener("click", handleNav)
    })
  })
  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => {
    if (window.innerWidth <= 768) {
      setCollapsed(true)
    };
  }

  const activeLink = (link) => {
    return location.pathname === link ? 'active-link' : '';
  };
  const handleGenerateTicketClick = () => {
    if (user && user.email) {
      if (user.email === "info@gmail.com") {
        navigate("/adminPanel/allTickets");
      } else {
        navigate("/user-profile/generated-tickets");
      }
    } else {
      navigate("/userLogin");
    }
    closeNavbar();
  };
  if (location.pathname.startsWith("/adminPanel") || location.pathname.startsWith("/user-profile")) {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" ref={navRef}>
        <div className="container-fluid main-nav px-4 py-1">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={capoLogo} alt="capobiz-point-of-sale-software-logo" className="img-fluid logo" style={{ height: '60px' }} />
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link nav-link-after ${activeLink('/')}`} to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link nav-link-after ${activeLink('/about')}`} to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link nav-link-after ${activeLink('/pos-features')}`} to="/pos-features" onClick={closeNavbar}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link nav-link-after ${activeLink('/system-hardware')}`} to="/system-hardware" onClick={closeNavbar}>
                  Hardware
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link nav-link-after ${activeLink('/pos-industries')}`} to="/pos-industries" onClick={closeNavbar}>
                  Industry Solutions
                </Link>
              </li>

              <li className="dropdown nav-item">
                <div className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Help Center
                </div>
                <ul className="dropdown-menu navMenu" aria-labelledby="dropdownMenuButton1">
                  <li className="nav-item">
                    <Link className={`nav-link nav-link-after ${activeLink('/help')}`} to="/help" onClick={closeNavbar}>
                      Knowledgebase
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link nav-link-after ${activeLink('/blog')}`} to="/blog" onClick={closeNavbar}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link nav-link-after ${activeLink('/faqs')}`} to="/faqs" onClick={closeNavbar}>
                      FAQ's
                    </Link>
                  </li>
                  {(!user || !user.email) && (
                    <li className="nav-item">
                      <Link className={`nav-link nav-link-after ${activeLink('/userLogin')}`} to="/userLogin" onClick={closeNavbar}>
                        Generate Ticket
                      </Link>
                    </li>
                  )}
                  {user && user.email && (
                    <li className="nav-item">
                      <button className={`nav-link nav-link-after ${activeLink('/generateTicket')}`} onClick={handleGenerateTicketClick}>
                        Generate Ticket
                      </button>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link className={`nav-link nav-link-after ${activeLink('/contact')}`} to="/contact" onClick={closeNavbar}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="demo-button">
              <Link to={user && user.name ? "/pos-demo" : "/Signup"}>
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

export default Navbar;




