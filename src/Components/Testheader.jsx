import React from 'react'
import { Link } from 'react-router-dom'

function Testheader() {
  return (
    <div>
      <section className="test-header header-mobile">
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 text-center text-dark">
                  <div className="content-wrapper">
                <h2 className="slider-heading mb-3" style={{color: '#000'}}>
                Have Total Control <br />And Maximum {" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                     Business Growth 
                  </span>{" "}
                  
                </h2>
                <p className="text-dark" style={{fontSize: '20px'}}>
                  Offer a seamless shopping experience with our Point of Sale
                  system, supporting a variety of payment options to boost your
                  revenue.
                </p>
                </div>
                <button className="site-buttons" style={{ color: "#fff", backgroundColor: 'var(--secondary-color)', zIndex: 100 }}>
                  <Link to='/pos-features' style={{ color: "#fff" }}>
                    View Features <span>&rarr;</span>
                  </Link>
                </button>
                </div>
            </div>
        </div>
            
      </section>
    </div>
  )
}

export default Testheader
