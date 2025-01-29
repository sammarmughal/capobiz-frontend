import React, { useEffect } from "react";
import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import WhyChoosePOS from "../Assets/Images/why-choose-pos-software.avif";
import Benefits from "../Assets/Images/inner-page-about-header.avif";
import Testimonials from "./Testimonials";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Clients from "./Clients";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  Get To Know{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    About CapoBiz
                  </span>{" "}
                  Software
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section py-4">
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-lg-6 col-12"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="section-heading">
                <h2
                  className="subtitle"
                  style={{ color: "var(--secondary-color)" }}
                >
                  Smart POS, Your Business Ally
                </h2>
                <h3
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Affordable POS Software for Small Businesses in Pakistan
                </h3>
              </div>
              <p>
                Step into a new era of business management with our{" "}
                <strong>affordable POS software in Pakistan</strong>, designed
                to cater to businesses of all sizes. As retail software
                innovators, we revolutionize how you run your business, making
                it simpler and more efficient. Our POS software for small
                businesses empowers you to streamline operations, enhance
                customer satisfaction, and make informed decisions effortlessly.
                Discover the next generation of point-of-sale systems for retail
                that blends cutting-edge innovation with user-friendly
                functionality, making your business success a seamless part of
                your journey.
              </p>
              <hr />

              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "5px",
                        paddingTop: "2px",
                      }}
                    >
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Tailored POS solutions adapting to your business needs.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "5px",
                        paddingTop: "2px",
                      }}
                    >
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Informed decisions with instant business insights.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "5px",
                        paddingTop: "2px",
                      }}
                    >
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Swift on-the-go business management with mobile access.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "5px",
                        paddingTop: "2px",
                      }}
                    >
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Grow confidently with a point-of-sale system that scales
                      with your business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-12"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <img
                className="img-fluid"
                src={AboutPointOfSale}
                alt="Affordable POS software in Pakistan"
                title="Affordable POS software in Pakistan"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="benefits our-pos-benefits"
        style={{
          backgroundImage: `url(${Benefits})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="benefits-overlay">
          <div className="container p-5">
            <div
              className="row d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas fa-users mb-4" ></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Unlimited Account Openings
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas fa-cogs mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Customized Product Defining
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-arrow-circle-left mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Requirements and Sale Return
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fas fa-sync mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Auto Stock Updating Feature
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row d-flex justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="col-md-3 col-6 culprit">
                <div className="icon-box text-center">
                  <i className="fas fa-box mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Min Stock Management Feature
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6 culprit">
                <div className="icon-box text-center">
                  <i className="fas fa-undo mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Product Purchase Return Option
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-6 culprit faster-billing">
                <div className="icon-box text-center">
                  <i className="fas  fa-money-check-alt mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Faster Retail Billing Functionality
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row d-flex justify-content-center align-items-center mb-4"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-chart-bar mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Detailed Sales Reports
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="icon-box text-center">
                  <i className="fas  fa-lock mb-4"></i>
                  <p className="" style={{ fontSize: "16px" }}>
                    Secure Data Encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="why-choose-us py-5"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div className="mt-4">
                <h2 className="subtitle">Discover the CapoBiz Advantage</h2>
                <h3
                  className="main-heading mb-4"
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Why CapoBiz is the Best POS Software for Your Business
                </h3>
                <p>
                  Selecting the right Point-of-Sale (POS) software is essential
                  for business growth and efficiency. CapoBiz, an affordable POS
                  software in Pakistan, delivers unmatched features designed to
                  elevate your business. Whether you run a small business or a
                  retail store, CapoBiz offers tailored solutions to simplify
                  operations, optimize inventory, and improve decision-making.
                  Discover why CapoBiz is the preferred choice for businesses
                  like yours!
                </p>
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Effortless operation with a user-friendly interface for
                      quick adoption.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Optimize stock levels with precision and prevent overstock
                      or stockouts.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Access business data securely anytime, anywhere for
                      enhanced flexibility.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)", 
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Make informed decisions with customizable reports and
                      analytics.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Effortlessly integrate with other applications for
                      streamlined operations.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Consistent customer experience across various devices and
                      platforms.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      State-of-the-art features to safeguard sensitive data and
                      ensure compliance.
                    </li>
                    <li
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                      className="bullet-arrow"
                    >
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                          marginTop: "8px",
                        }}
                      ></i>{" "}
                      Dedicated customer support team available round the clock
                      for peace of mind.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <img
                src={WhyChoosePOS}
                alt="why-choose-pos-software"
                title="POS software for small businesses"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ start */}
      <section id="faq" className="faq section-bg py-4">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
            <h2 className="subtitle text-center">F.A.Q</h2>
            <p className="text-center">
              {" "}
              Frequently Asked <span>Questions</span>{" "}
            </p>
            <p className="text-center">
              Our curated list of the most frequently asked questions about us.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq19"
                    className="collapsed question text-start"
                  >
                    What is CapoBiz and how does it assist businesses in
                    managing their operations?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq19"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      {" "}
                      CapoBiz is a versatile software designed to help
                      businesses handle stock management, sales, purchases,
                      production, and manufacturing. It includes tools for
                      tracking inventory, generating sales reports, managing
                      orders, and planning production workflows. It’s one of the{" "}
                      <strong>best POS software in Pakistan</strong>, trusted
                      for efficiency and versatility.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq20"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for businesses in specific industries?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq20"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz serves a variety of industries, including retail
                      shops, supermarkets, pharmacies, garment outlets, and
                      more. Its adaptable features make it an ideal{" "}
                      <strong>POS software for small businesses</strong>
                      and enterprise-level operations alike.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq21"
                    className="collapsed question text-start"
                  >
                    What are the key features of CapoBiz for restaurant
                    management? <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq21"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz provides <strong>restaurant POS software</strong>{" "}
                      with features like menu customization, table reservations,
                      inventory management, and billing. It’s a comprehensive
                      solution for restaurants, cafes, and other food service
                      businesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq22"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz offer solutions for real estate management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq22"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      {" "}
                      Yes, CapoBiz offers a{" "}
                      <strong>real estate management software</strong>
                      solution that simplifies property management tasks like
                      listings, tenant tracking, leases, and generating
                      financial reports.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq23"
                    className="collapsed question text-start"
                  >
                    How can CapoBiz benefit gyms and fitness centers?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq23"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz <strong>gym management software</strong> helps
                      fitness centers manage memberships, schedule trainers,
                      handle billing, and track attendance. It's perfect for
                      streamlining operations and improving member satisfaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq24"
                    className="collapsed question text-start"
                  >
                    Can CapoBiz be customized for tailor shops?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq24"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      {" "}
                      CapoBiz provides specialized tailor shop management
                      software designed to meet the needs of tailoring
                      businesses. Its features include measurement tracking,
                      order management, fabric inventory, invoicing, and
                      customer management, ensuring smooth operations.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq25"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz cater to trading businesses?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq25"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBiz provides comprehensive trading software solutions
                      designed to streamline trading operations. The platform
                      includes tools for managing orders, tracking inventory,
                      analyzing sales, handling purchases, and generating
                      detailed reports.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq26"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for office management tasks?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq26"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      {" "}
                      CapoBiz office management software is designed to simplify
                      administrative tasks, boost productivity, and improve
                      workplace communication. It includes tools for task
                      tracking, document sharing, employee scheduling, and more
                      to support efficient office operations.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="site-buttons">
            <Link to="/faqs" style={{ color: "var(--primary-color)" }}>
              View More <span>&rarr;</span>
            </Link>
          </button>
        </div>
      </section>
      {/* FAQ end */}

      <Clients />

      <Testimonials />
    </div>
  );
}

export default About;
