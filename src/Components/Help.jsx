import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import issueImg from "../Assets/Images/help-img.avif";

export default function Help() {
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
                  Have Queries? Talk To Our{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Help Center
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row help-card justify-content-between">
          <div className="col-md-3">
            <i className="fas mb-3 fa-ticket-alt"></i>
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>
              Streamlined Ticketing
            </p>
            <p>
              {" "}
              Easily log and track issues for swift resolution and seamless
              communication.
            </p>
          </div>
          <div className="col-md-3">
            <i className="fas mb-3 fa-headset"></i>
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>
              Tailored Support
            </p>
            <p>Get tailored assistance for your school's unique challenges.</p>
          </div>
          <div className="col-md-3">
            <i className="fas mb-3 fa-chart-line"></i>
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>
              Continuous Improvements
            </p>
            <p>
              {" "}
              Share your experiences and suggestions for continuous software
              improvement.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(241, 243, 251)" }}>
        <div className="container py-4">
          <div className="row help-card align-items-center justify-content-between">
            <div className="col-md-6 help_points">
              <p style={{ fontSize: "30px" }}>Uh Oh! Having An Issue?</p>
              <p>
                {" "}
                Do you have queries related to using our software, talk to our
                help center. We offer comprehensive support and resources for
                our retail software. Your feedback helps us fix issues and make
                things smoother for everyone!
              </p>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "--var(secondary-color)",
                }}
              >
                {" "}
                How to report an issue:
              </p>
              <li>Briefly explain what went wrong.</li>
              <li>
                If you can, show us how to make the bug happen again
                (step-by-step).
              </li>
              <li>Copy and paste any error messages that pop up.</li>
              Still need guidance?{" "}
              <Link to="/userLogin" className="geneTicketLink">
                {" "}
                Generate a ticket
              </Link>{" "}
              of your problem and our support team will take you through the
              process to resolve your issue.
            </div>
            <div className="col-md-5">
              <img
                src={issueImg}
                alt="pos-software-help-center"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
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
                      CapoBiz offers a comprehensive solution for managing
                      inventory, sales, purchases, production, and manufacturing
                      processes. It features tools like inventory monitoring,
                      sales analysis, order tracking, and production scheduling
                      to streamline business operations.{" "}
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
                      {" "}
                      CapoBiz caters to diverse industries such as retail
                      outlets, grocery stores, pharmacies, mobile phone shops,
                      apparel stores, footwear retailers, fertilizer companies,
                      and the tile sector. Its flexibility allows for tailored
                      solutions to meet various business needs.{" "}
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
                      {" "}
                      CapoBiz specializes in restaurant management solutions
                      designed to streamline processes like inventory control,
                      sales tracking, reservation handling, and customer service
                      enhancement. Key features include menu management, table
                      booking, kitchen order processing, and seamless billing.{" "}
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
                      CapoBiz offers a robust real estate management system that
                      streamlines tasks like property listings, tenant
                      management, lease administration, maintenance planning,
                      and financial reporting, making property management more
                      efficient.{" "}
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
                      {" "}
                      With CapoBiz gym management software, fitness centers can
                      streamline operations, including membership management,
                      class and trainer scheduling, billing, and attendance
                      tracking. This robust tool helps gym owners improve
                      efficiency and elevate the overall experience for their
                      members.{" "}
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
                      CapoBiz offers comprehensive tailor shop management
                      software tailored to the requirements of tailoring
                      businesses. Key features include measurement handling,
                      order tracking, fabric management, invoicing, and customer
                      relationship management to enhance efficiency.{" "}
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
                      Looking for efficient trading solutions? CapoBiz delivers
                      software tailored to optimize trading processes with
                      functionalities like order handling, inventory tracking,
                      sales insights, purchase management, and detailed
                      reporting.
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
                      CapoBiz provides office management software that enhances
                      productivity and streamlines administration. With features
                      like task management, file sharing, staff scheduling, and
                      improved communication, it creates a more organized and
                      efficient office environment.{" "}
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
    </div>
  );
}
