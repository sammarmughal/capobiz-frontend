import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

function CTA() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="mb-5 mt-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container call-to-action">
          <div className="cta-overlay">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-10 p-5 text-center text-light">
                <h2 className="main-heading text-light">Transform Your Business Today!</h2>
                <p className='mb-5 text-light'>Elevate efficiency with CapoBiz – your gateway to seamless transactions and unparalleled business management. Take charge now for a smarter tomorrow.</p>
                <Link to="/Signup"><button className="site-buttons text-light">Get A Demo <span>&rarr;</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
