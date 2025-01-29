import React from 'react'
import { Link } from 'react-router-dom'
import transformBusiness from '../Assets/Images/header-circle-img.avif'


function Transparent() {
  return (
    <div>
      <section className="tansparent-head" style={{ backgroundColor: '#f3f6fb' }}>
        <div className="container ">
          <div className="row d-flex justify-content-center py-5 align-items-center">
            <div className="col-lg-6 text-dark" data-aos="fade-right" data-aos-duration="1500">
              <div className="content-wrapper">
                <h1 className="slider-heading mb-3" style={{ color: '#000', textShadow: "none" }}>
                  Get The Best<br /> Retail Software For Your {" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Business Growth
                  </span>{" "}

                </h1>
                <p className="text-dark" style={{ fontSize: '20px' }}>
                  Empowering Your Business Growth. Enhance customer experience and boost revenue with our versatile <strong>Point of Sale Software</strong>.
                </p>
              </div>
              <button className="site-buttons mt-3">
                <Link to='/pos-features' style={{ color: "#000" }}>
                  View Features <span>&rarr;</span>
                </Link>
              </button>
            </div>

            <div className="col-lg-6 header-circle-mobile" data-aos="fade-left" data-aos-duration="1500">
              <img src={transformBusiness} alt="Point of sale system" title='Point of sale system' className="img-fluid" />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Transparent
