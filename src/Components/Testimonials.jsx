import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User from "../Assets/Images/user.avif";

function Testimonials() {
  var settingsTest = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <section className="clients-testimonials">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-lg-3 col-md-6 col-12 animation"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="content">
                <h2 className="subtitle">Echoes of Delight </h2>
                <h3 className="main-heading" style={{ fontSize: "26px" }}>
                  Listen To The Whispers of Praise
                </h3>
                <p>
                  {" "}
                  Dive into compelling narratives that resonate with our
                  commitment to excellence. Join the harmonious chorus of
                  content clients, where success stories unfold with every
                  testimonial about CapoBiz's leading POS software in Pakistan.
                </p>
              </div>
              <div className="testimonials"></div>
            </div>
            <div
              className="col-lg-9 col-md-6 col-12 py-7"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <Slider {...settingsTest}>
                <div className="">
                  <div className="card testimonial-cards">
                    <div className="card-content testimonials-content ">
                      <div className="p-3">
                        <p
                          className="test-heading"
                          style={{ margin: "0", fontSize: "23px" }}
                        >
                          Flexible Services
                        </p>
                        <p>
                          Our experience with CapoBiz POS software has been
                          outstanding. It adapts effortlessly to diverse
                          business needs, offering solutions like
                          <strong>
                            POS software with inventory management
                          </strong>{" "}
                          and <strong>real-time POS analytics</strong>. This
                          affordable POS software in Pakistan has proven
                          invaluable for daily tasks and strategic planning.
                        </p>
                        <div className="container-fluid">
                          <div className="row d-flex justify-content-center align-items-start">
                            <div className="col-md-3 col-3">
                              <img
                                src={User}
                                className="img-fluid rounded-circle d-flex justify-content-center align-items-start"
                                alt="Supermarket POS software Pakistan"
                                style={{ width: "80px ", objectFit: "contain" }}
                              />
                            </div>
                            <div className="col-md-9 col-9">
                              <p className="mb-0" style={{ fontSize: "13px" }}>Zaheer Ahmed</p>
                              <p style={{ fontSize: "9px" }}>
                                CEO Go Green Fertilizers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card testimonial-cards ">
                    <div className="card-content testimonials-content">
                      <div className="p-3">
                        <p
                          className="test-heading"
                          style={{ margin: "0", fontSize: "23px" }}
                        >
                          Transaction Ease
                        </p>
                        <p>
                          Processing transactions with CapoBiz has never been
                          simpler. This <strong>cloud-based POS system</strong>{" "}
                          ensures seamless sales operations with advanced
                          features like barcode scanning. It's the best POS
                          software in Pakistan for streamlining operations and
                          boosting efficiency.
                        </p>
                        <div className="container-fluid">
                          <div className="row d-flex justify-content-center align-items-start">
                            <div className="col-md-3 col-3">
                              <img
                                src={User}
                                className="img-fluid rounded-circle d-flex justify-content-center align-items-start"
                                alt="Pharmacy POS software Pakistan"
                                style={{ width: "80px ", objectFit: "contain" }}
                              />
                            </div>
                            <div className="col-md-9 col-9">
                              <p className="mb-0" style={{ fontSize: "13px" }}>Danish Janjua</p>
                              <p style={{ fontSize: "9px" }}>
                                CEO DAnish Group Of Companies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card testimonial-cards">
                    <div className="card-content testimonials-content">
                      <div className="p-3">
                        <p
                          className="test-heading"
                          style={{ margin: "0", fontSize: "23px" }}
                        >
                          Inventory Control
                        </p>
                        <p>
                          This <strong>retail POS software in Pakistan</strong>{" "}
                          has been instrumental in our growth. Its                       
                          inventory management features and customizable analytics
                          help us adapt to new challenges. With CapoBiz,
                          managing retail operations feels effortless and highly
                          efficient.
                        </p>
                        <div className="container-fluid">
                        <div className="row d-flex justify-content-center align-items-start">
                            <div className="col-md-3 col-3">
                              <img
                                src={User}
                                className="img-fluid rounded-circle d-flex justify-content-center align-items-start"
                                alt="Pharmacy POS software Pakistan"
                                style={{ width: "80px ", objectFit: "contain" }}
                              />
                            </div>
                            <div className="col-md-9 col-9">
                              <p className="mb-0" style={{ fontSize: "13px" }}>Haris Gulzar</p>
                              <p style={{ fontSize: "9px" }}>
                                Director Sabir Stores
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="card testimonial-cards ">
                    <div className="card-content testimonials-content">
                      <div className="p-3">
                        <p
                          className="test-heading"
                          style={{ margin: "0", fontSize: "23px" }}
                        >
                          Growth Partner
                        </p>
                        <p>
                          Managing our stock has become incredibly streamlined
                          with this tool. It offers real-time updates and
                          detailed analytics, ensuring we maintain optimal
                          inventory levels without the usual headaches. It’s a
                          game-changer for our operations.
                        </p>
                        <div className="container-fluid">
                          <div className="row d-flex justify-content-center align-items-start">
                            <div className="col-md-3 col-3">
                              <img
                                src={User}
                                className="img-fluid rounded-circle d-flex justify-content-center align-items-start"
                                alt="Restaurant POS system with inventory"
                                style={{ width: "80px ", objectFit: "contain" }}
                              />
                            </div>
                            <div className="col-md-9 col-9">
                              <p className="mb-0" style={{ fontSize: "13px" }}>Khan Muhammad</p>
                              <p style={{ fontSize: "9px" }}>
                                CEO Mobilfiksern
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials;
