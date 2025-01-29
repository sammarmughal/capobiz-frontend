import React from "react";
// import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import SeoTextPage from "./SeoTextPage";

function Contact() {
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
    const number = form.number.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const customerno = document.getElementById("customerno");
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
    if (!number) {
      customerno.innerText = "Please fill this field ";
      hasError = true;
    } else {
      customerno.innerText = "";
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
        "service_j20fv3p",
        "template_hot5dck",
        formRef.current,
        "o1W27mZ8t_ZsGHWgO"
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
                <h1 className="slider-heading">
                  Contact For{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Best POS Software
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us-section pt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <h2 className="main-heading">Contact Us For Best POS Software</h2>
              <p className="mb-5">
                For any query or question, you can get in touch with us through
                this contact form. Or make a call on the given WhatsApp, or
                write to us on the given email address.
              </p>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-6">
                  <div className="card contact-cards text-center">
                    <i className=" fas fa-envelope fa-2x"></i>
                    <p className="email"> info@technicmentors.com</p>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="card contact-cards text-center">
                    <i className="fas fa-phone fa-2x"></i>
                    <p className="phone">
                      +923 111 122 144
                    </p>
                  </div>
                </div>
                <section className="text-center text-dark mt-4 mb-4">
                  <a
                    data-mdb-ripple-init
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-floating m-1"
                    href="https://www.facebook.com/CapoBiz"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-floating m-1"
                    href="https://twitter.com/TechnicMentors"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-floating m-1"
                    href="https://www.youtube.com/c/TechnicMentors"
                    role="button"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-floating m-1"
                    href="https://www.instagram.com/capobiz/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-floating m-1"
                    href="https://www.linkedin.com/in/TechnicMentors/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>


                </section>
              </div>
            </div>
            <div className="col-md-5" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <div className="row" data-aos="fade-up" data-aos-delay="100">
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
                        type="number"
                        className="form-control"
                        name="number"
                        id="customerno"
                        placeholder="Contact"
                        required
                      />
                      <div id="customerno" style={{ color: "red" }}></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
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
      </section>
      <SeoTextPage />
    </div>
  );
}

export default Contact;
