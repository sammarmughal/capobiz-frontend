import React, { useState } from "react";

function FAQs() {
  const [activeAccordionLeft, setActiveAccordionLeft] = useState(null);
  const [activeAccordionRight, setActiveAccordionRight] = useState(null);

  const handleAccordionToggle = (column, accordionId) => {
    if (column === "left") {
      setActiveAccordionLeft(
        activeAccordionLeft === accordionId ? null : accordionId
      );
    } else if (column === "right") {
      setActiveAccordionRight(
        activeAccordionRight === accordionId ? null : accordionId
      );
    }
  };

  return (
    <div>
      <section className="faqs mb-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container p-4">
          <div className="row">
            <div className="faq-content text-center mb-3 mt-4">
              <h2 className="subtitle">Frequently Asked Questions</h2>
              <h3 className="main-heading">Your Concerns Matter The Most!</h3>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div
                className="accordion"
                id="accordionPanelsStayOpenExampleLeft"
              >
                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionLeft !== 1 ? "closed" : ""
                    }`}
                    id="headingOneLeft"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionLeft === 1 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOneLeft"
                      aria-expanded={
                        activeAccordionLeft === 1 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("left", 1)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionLeft === 1
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionLeft === 1
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      Q: What features does CapoBiz POS software offer?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionLeft === 1 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseOneLeft"
                    aria-labelledby="headingOneLeft"
                  >
                    <div className="accordion-body">
                      <p>
                        CapoBiz POS software is equipped with a comprehensive
                        set of features including inventory management, sales
                        tracking, employee management, customer data tracking,
                        and real-time reporting. It supports various payment
                        methods and can be customized to meet specific business
                        needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionLeft !== 2 ? "closed" : ""
                    }`}
                    id="headingTwoLeft"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionLeft === 2 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwoLeft"
                      aria-expanded={
                        activeAccordionLeft === 2 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("left", 2)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionLeft === 2
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionLeft === 2
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      Q: Is this point of sale software compatible with
                      different hardware devices?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionLeft === 2 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseTwoLeft"
                    aria-labelledby="headingTwoLeft"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, our POS software is designed to be
                        hardware-agnostic and can seamlessly integrate with a
                        variety of devices, including barcode scanners, receipt
                        printers, cash registers, and more. This flexibility
                        ensures compatibility with your existing equipment or
                        allows for easy upgrades.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionRight !== 3 ? "closed" : ""
                    }`}
                    id="headingOneRight"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionRight === 3 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOneRight"
                      aria-expanded={
                        activeAccordionRight === 3 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("right", 3)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionRight === 3
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionRight === 3
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      Q: Can CapoBiz POS software be customized to suit specific
                      business needs?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionRight === 3 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseOneRight"
                    aria-labelledby="headingOneRight"
                  >
                    <div className="accordion-body">
                      <p>
                        Absolutely! Our POS system is highly customizable.
                        Whether you run a retail store, restaurant, or any other
                        business, we provide options to tailor the software to
                        meet your unique requirements. Our team can work with
                        you to configure the software according to your business
                        processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <div
                className="accordion"
                id="accordionPanelsStayOpenExampleRight"
              >
                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionLeft !== 4 ? "closed" : ""
                    }`}
                    id="headingThreeLeft"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionLeft === 4 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeLeft"
                      aria-expanded={
                        activeAccordionLeft === 4 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("left", 4)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionLeft === 4
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionLeft === 4
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      How secure is the data processed by this POS system?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionLeft === 4 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseThreeLeft"
                    aria-labelledby="headingThreeLeft"
                  >
                    <div className="accordion-body">
                      <p>
                        Security is a top priority for us. Our POS software
                        employs robust encryption protocols to safeguard
                        sensitive information. Regular security updates and
                        compliance with industry standards ensure that your data
                        is protected against potential threats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionRight !== 5 ? "closed" : ""
                    }`}
                    id="headingTwoRight"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionRight === 5 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwoRight"
                      aria-expanded={
                        activeAccordionRight === 5 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("right", 5)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionRight === 5
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionRight === 5
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      Q: Does Technic Mentors provide training and support for
                      their POS software?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionRight === 5 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseTwoRight"
                    aria-labelledby="headingTwoRight"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we offer comprehensive training to ensure a smooth
                        onboarding process for your team. Additionally, our
                        support team is available to assist you with any queries
                        or issues that may arise. We are committed to providing
                        excellent customer support to help you make the most out
                        of our POS solution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <p
                    className={`accordion-header ${
                      activeAccordionRight !== 6 ? "closed" : ""
                    }`}
                    id="headingThreeRight"
                  >
                    <button
                      className={`accordion-button ${
                        activeAccordionRight === 6 ? "active" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeRight"
                      aria-expanded={
                        activeAccordionRight === 6 ? "true" : "false"
                      }
                      onClick={() => handleAccordionToggle("right", 6)}
                      data-bs-speed="500"
                      style={{
                        backgroundColor:
                          activeAccordionRight === 6
                            ? "#fff"
                            : "var(--secondary-color)",
                        borderRadius: "20px",
                        color:
                          activeAccordionRight === 6
                            ? "var(--primary-color)"
                            : "#fff",
                      }}
                    >
                      Q: How will you update your POS software?
                    </button>
                  </p>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordionRight === 6 ? "show" : ""
                    }`}
                    id="panelsStayOpen-collapseThreeRight"
                    aria-labelledby="headingThreeRight"
                  >
                    <div className="accordion-body">
                      <p>
                        We are dedicated to continuous improvement. Updates and
                        enhancements to our POS software are released regularly
                        to incorporate new features, address security concerns,
                        and improve overall performance. Customers with active
                        subscriptions receive these updates automatically,
                        ensuring they always have access to the latest
                        capabilities.
                      </p>
                    </div>
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

export default FAQs;
