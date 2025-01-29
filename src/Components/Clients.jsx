import React from 'react'
import AlAhad from '../Assets/Images/Clients/alahad.avif'
import AlMahdia from '../Assets/Images/Clients/almahdia.avif'
import LightCorner from "../Assets/Images/Clients/pees.avif";
import AlMakkah from '../Assets/Images/Clients/almakkah.avif'
import Danish from '../Assets/Images/Clients/homepainting.avif'
import PEES from '../Assets/Images/Clients/light-corner.avif'
import GetWell from '../Assets/Images/Clients/getwell.avif'
import LetTech from '../Assets/Images/Clients/lettech.avif'
import Mobilfiksern from '../Assets/Images/Clients/mobilfiksern.avif'
import PunjabEstate from '../Assets/Images/Clients/punjab.avif'
import Sheikh from '../Assets/Images/Clients/sheikh.avif'
import K2land from '../Assets/Images/Clients/k2land.avif'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section
        className="clients"
        style={{ backgroundColor: "#f1f3fb" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-12 py-4 ">
              <Slider {...settings}>
                <div>
                  <img src={AlAhad} className="img-fluid" alt="AlAhad Affordable POS software in Pakistan" title="AlAhad Affordable POS software in Pakistan"/>
                </div>
                <div>
                  <img src={AlMahdia} className="img-fluid" alt="AlMahdia Retail POS software Pakistan" title='AlMahdia Retail POS software Pakistan'/>
                </div>
                <div>
                  <img src={AlMakkah} className="img-fluid" alt="AlMakkah Point of sale system for retail" title='AlMakkah Point of sale system for retail' />
                </div>
                <div>
                  <img
                    src={Danish}
                    className="img-fluid"
                    alt="Best POS software in Pakistan" 
                  />
                </div>
                <div>
                  <img
                    src={GetWell}
                    className="img-fluid"
                    alt="GetWell Pharmacy POS software Pakistan"
                    title='GetWell Pharmacy POS software Pakistan'
                  />
                </div>
                <div>
                  <img
                    src={LetTech}
                    className="img-fluid"
                    alt="Let Technologies Cloud-based POS software"
                    title='Let Technologies Cloud-based POS software'
                  />
                </div>
                <div>
                  <img
                    src={Mobilfiksern}
                    className="img-fluid"
                    alt="Mobile POS system Pakistan"
                    title='Mobile POS system Pakistan'
                  />
                </div>
                <div>
                  <img
                    src={PunjabEstate}
                    className="img-fluid"
                    alt="Offline POS system for retai"
                    title='Offline POS system for retai'
                  />
                </div>
                <div>
                  <img
                    src={Sheikh}
                    className="img-fluid"
                    alt="POS software for small businesses"
                    title='POS software for small businesses'
                  />
                </div>
                <div>
                  <img
                    src={K2land}
                    className="img-fluid"
                    alt="POS software for small businesses"
                    title='POS software for small businesses'
                  />
                </div>
                <div>
                  <img
                    src={LightCorner}
                    className="img-fluid"
                    alt="POS system for shop owners"
                    title='POS system for shop owners'
                  />
                </div>
                <div>
                  <img
                    src={PEES}
                    className="img-fluid"
                    alt="Electronics store POS software"
                    title='Electronics store POS software'
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients
