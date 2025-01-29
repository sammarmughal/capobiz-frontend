import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import capoLogo from '../Assets/Images/CapoBiz-LOGO.avif'
import userImg from "../Assets/Images/user-img.png"

function UserNavbar() {
    const location = useLocation();
    const user = JSON.parse(sessionStorage.getItem("signUser") || "{}");
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const closeNavbar = () => setCollapsed(true);

    const activeLink = (link) => {
        return location.pathname === link ? 'active' : '';
    };

    if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/demoUsers" || location.pathname === "/adminPanel/allTickets") {
        return null;
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
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
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" onClick={closeNavbar}>
                            <li className="nav-item">
                                <Link className={`nav-link nav-link-after ${activeLink('/')}`} to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-link-after ${activeLink('/about')}`} to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-link-after ${activeLink('/pos-features')}`} to="/pos-features">
                                    Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-link-after ${activeLink('/system-hardware')}`} to="/system-hardware">
                                    Hardware
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link nav-link-after ${activeLink('/pos-industries')}`} to="/pos-industries">
                                    Industry Solutions
                                </Link>
                            </li>

                        </ul>
                        <div className="demo-button">
                            <li className="nav-item" style={{ listStyle: "none" }}>
                                <img src={userImg} className="img-fluid" alt="user-img" style={{ height: "38px" }} data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample" />
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            {/* user-profile */}
            <div className="container-fluid">
                <div className="row d-flex justify-content-end">
                    <div className="col-md-2">
                        <div className="collapse profile-set" id="collapseExample">
                            <div className="card card-body">
                                <h6 className="text-center">{user.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-center">{user.name && user.name.charAt(0)}</h3>
                                </div>
                                <p className="text-center">{user.email}</p>
                                <p className="text-center">{user.number}</p>
                                <Link to="/userLogin/" className="text-center">Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;




