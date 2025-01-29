import React from 'react'
import { useLocation } from 'react-router-dom'

function Topbar() {
    const location = useLocation()

    if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/demoUsers" || location.pathname === "/adminPanel/allTickets") {
        return null;
    }
    return (
        <div>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid px-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text mt-2">
                                    <p className='text-white mb-0' style={{ fontFamily: 'poppins' }}> For Demo: <i className="fab fa-whatsapp"></i>&nbsp;+923 111 122 144</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social mt-2">
                                    <a href="https://www.facebook.com/CapoBiz"><i className="fab fa-facebook-f"></i> <span className='d-none'>Face</span></a>
                                    <a href="https://www.instagram.com/capobiz/"><i className="fab fa-instagram"></i> <span className='d-none'>Insta</span></a>
                                    <a href="https://twitter.com/TechnicMentors"><i className="fab fa-twitter"></i> <span className='d-none'>X</span></a>
                                    <a href="https://www.youtube.com/c/TechnicMentors"><i className="fab fa-youtube"></i> <span className='d-none'>YT</span></a>
                                    <a href="https://www.linkedin.com/in/TechnicMentors/"><i className="fab fa-linkedin-in"></i> <span className='d-none'>In</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
