import React from "react";
import { useState, useRef, useEffect } from "react";
import bookDemo from "../Assets/Images/book-demo.avif";
import freeTraining from "../Assets/Images/pos-software-support.avif";
import emailjs from "emailjs-com";
import LinkIcon from "@mui/icons-material/Link";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import AOS from "aos";
import "aos/dist/aos.css";

function Demo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const subjectI = document.getElementById("subjectI");
    const messageI = document.getElementById("messageI");

    let hasError = false;

    if (!name) {
      nameI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      nameI.innerText = "";
    }

    if (!email) {
      emailI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      emailI.innerText = "";
    }

    if (!subject) {
      subjectI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      subjectI.innerText = "";
    }

    if (!message) {
      messageI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      messageI.innerText = "";
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm(
        "service_9x25qjf",
        "template_wev39ct",
        formRef.current,
        "ZFbDufHGULjHKZGqF"
      )

      .then((response) => {
        formRef.current.reset();
        setSuccessMessage("Your Message Is Sent Successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <section
        className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Get{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Free POS
                  </span>{" "}
                  Demo
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-consult mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-1" data-aos="zoom-in-right" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={bookDemo}
                alt="point-of-sale-software-demo"
                className="img-fluid"
              />
            </div>

            <div className="col-md-7 order-md-2" data-aos="zoom-in-left" data-aos-offset="200" data-aos-duration="1200">
              <div className="mb-3">
                <h6 className="subtitle">Ask The Expert</h6>
                <h2 className="main-heading">Book Free Initial Consultant</h2>
                <p>
                  Schedule your personalized consultation to explore how our
                  Point of Sale software can enhance your business operations.
                  Book now for a tailored demo experience.
                </p>
              </div>
              <div className="demo-list">
                <ul
                  style={{ listStyle: "none", padding: "0", lineHeight: "3" }}
                >
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Personalized
                    consultation for your business needs.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Seamless integration
                    with your existing operations.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Tailored demo
                    experience to optimize efficiency.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Explore the
                    transformative impact of our POS software.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-training mt-5 mb-4">
        <div className="container">
          <div className="row reverse-order">
            <div className="col-md-7" data-aos="zoom-in-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="mb-3">
                <h6 className="subtitle">Get The Support You Need</h6>
                <h2 className="main-heading">Get Free Training And Support</h2>
                <p>
                  Ease into our system effortlessly with free training sessions.
                  We're committed to ensuring you confidently navigate and
                  optimize our Point of Sale software for your business success.
                </p>
              </div>
              <div className="demo-list">
                <ul
                  style={{ listStyle: "none", padding: "0", lineHeight: "3" }}
                >
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Unlock the full
                    potential of our system with complimentary training.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Access easy-to-use
                    materials for a seamless learning experience.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Rely on our expert
                    team for ongoing assistance.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>&nbsp; Ensure a hassle-free
                    integration process for your business.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5" data-aos="zoom-in-left" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={freeTraining}
                alt="point-of-sale-software-demo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-for-demo">
        <div className="demo-overlay">
          <div className="container p-5">
            <div className="row d-flex justify-content-center text-light text-center">
              <p style={{ fontSize: "20px", color: "#fff" }} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Get an online demo of the system. Below is the URL and the
                credentials for the online demo of our point of sale software.
                Want to have an onsite demo? Send us a message via this form and
                get in touch with us.
              </p>
              <div className="col-md-5 col-12" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
                <div className="credentials">
                  <div
                    className="row mt-4 text-start text-light justify-content-center"
                    style={{ flexDirection: "column" }}
                  >
                    <div className="col-md-4 mb-4">
                      <h6>
                        <LinkIcon></LinkIcon>&nbsp;
                        <strong>URL Demo:</strong>
                      </h6>
                      <a
                        href="https://pos.technicmentors.com/"
                        style={{ color: "var(--secondary-color" }}
                      >
                        https://pos.technicmentors.com/public
                      </a>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6>
                        <PersonIcon />
                        &nbsp;
                        <strong style={{ color: "#fff" }}>
                          Username/ Email:
                        </strong>
                      </h6>
                      <p style={{ color: "#fff" }}>pos@technicmentors.com</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <h6>
                        <PasswordIcon />
                        &nbsp;
                        <strong style={{ color: "#fff" }}> Password:</strong>
                      </h6>
                      <p style={{ color: "#fff" }}>12345678</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-7 demo-form" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                <div className="row" >
                  <div className="col-md-12">
                    <form
                      id="contactForm"
                      onSubmit={sendEmail}
                      ref={formRef}
                      className="contactform"
                    >
                      {successMessage && (
                        <div className="alert alert-info">{successMessage}</div>
                      )}

                      <div className="row">
                        <div className="col form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                          <div id="nameI" style={{ color: "red" }}></div>
                        </div>
                        <div className="col form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                          <div id="emailI" style={{ color: "red" }}></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Contact"
                          required
                        />
                        <div id="subjectI" style={{ color: "red" }}></div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="5"
                          placeholder="Message"
                          required
                        ></textarea>
                        <div id="messageI" style={{ color: "red" }}></div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Demo;
