
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CapoBizWhite from '../Assets/Images/CapoBiz-white.avif'

function Footer() {
  const location = useLocation()

  if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/demoUsers" || location.pathname === "/adminPanel/allTickets") {
    return null;
  }
  return (
    <div>
      <footer id="footer">
        <div className="footer-overlay">
          <div className="footer-top">
            <div className="container footer-container">
              <div className="row d-flex justify-content-between py-5 ">

                <div className="col-lg-4 col-md-4 footer-contact text-start">

                  <Link to="/"><img src={CapoBizWhite} alt='capobiz-retail-software' className="text-uppercase mb-3" style={{ height: '60px' }} /></Link>
                  <p style={{ color: '#fff' }}>Say goodbye to complexity, and welcome streamlined operations and unmatched efficiency. Explore the future of POS solutions with us, where innovation meets seamless functionality, and success becomes your everyday companion.</p>
                  <section className='social-icons'>
                    <Link className="btn btn-outline btn-floating m-1" to="https://www.facebook.com/CapoBiz" role="button"
                    ><i className="fab fa-facebook-f"></i> <span className='d-none'>Facebook</span></Link>

                    <Link className="btn btn-outline btn-floating m-1" to="https://twitter.com/TechnicMentors" role="button"
                    ><i className="fab fa-twitter"></i> <span className='d-none'>Twitter</span></Link>

                    <Link className="btn btn-outline btn-floating m-1" to="https://www.youtube.com/c/TechnicMentors" role="button"
                    ><i className="fab fa-youtube"></i> <span className='d-none'>YouTube</span></Link>

                    <Link className="btn btn-outline btn-floating m-1" to="https://www.instagram.com/capobiz/" role="button"
                    ><i className="fab fa-instagram"></i> <span className='d-none'>Instagram</span></Link>

                    <Link className="btn btn-outline btn-floating m-1" to="https://www.linkedin.com/in/TechnicMentors/" role="button"
                    ><i className="fab fa-linkedin-in"></i> <span className='d-none'>LinkedIn</span></Link>
                  </section>
                </div>

                <div className="col-lg-4 col-md-4 footer-links text-start">

                  <h2>Subscribe</h2>
                  <p className='text-white'>Stay updated on how future of technology is shaping</p>
                  <div className='d-flex footer-signup'>
                    <input type='text' className='form-control bg-transparent  py-3' placeholder='Enter Your Email Here'></input>
                    <button className='btn btn-light px-4' style={{ marginLeft: "2%" }}>Submit</button>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 footer-links text-start">
                  <h2>Let's Meet</h2>
                  <p>
                    <i className="fas fa-location-dot" style={{
                      fontSize: "15px",
                      color: "var(--secondary-color)",
                    }}></i> <strong style={{ color: '#fff' }}>Address:</strong>  <br />
                    <p style={{ color: '#fff' }}>148, Mumtaz Market, Opposite ChaseUp, G.T. Road Gujranwala</p>
                  </p>
                  <p>

                    <i className="fas fa-phone" style={{
                      fontSize: "15px",
                      color: "var(--secondary-color)",
                    }}></i> <strong style={{ color: '#fff' }}>Phone:</strong>  <br />
                    <p style={{ color: '#fff' }}>+923 111 122 144</p>
                  </p>
                  <p>
                    <i className="fas fa-envelope" style={{
                      fontSize: "15px",
                      color: "var(--secondary-color)",
                    }}></i> <strong style={{ color: '#fff' }}>Email:</strong>  <br />
                    <a href='mailto:info@capobiz.com' style={{ color: '#fff' }}>info@capobiz.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid bottom-footer text-center">
        <div className="copyright">
          &copy; Copyright <strong><span>CapoBiz</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Developed With Love By <a href="https://technicmentors.com" className='fw-bold' target='_blank' rel='noreferrer' style={{ color: 'var(--primary-color)' }}>Technic Mentors</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

