import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import FeaturesComponent from "./FeaturesComponent";
import SuperMartPOS from '../Assets/Images/super-mart-pos.avif'
import RestaurantPOS from '../Assets/Images/restaurant-pos-software.avif'
import PharmacyPOS from '../Assets/Images/pharmacy-pos.avif'
import FertilizersPOS from '../Assets/Images/pos-for-fertilizers-shop.avif'
import TradingPOS from '../Assets/Images/pos-for-trading-business.avif'
import MobileShopPOS from '../Assets/Images/pos-for-mobile-shop.avif'
// import Testimonials from "./Testimonials";
import lineImg from '../Assets/Images/businesses-section-bg.png'
import AOS from "aos";
import "aos/dist/aos.css";
import CTA from "./CTA";
import FAQs from "./FAQs";
import Transparent from "./Transparent";
import nextGenRetailSoftware from '../Assets/Images/next-gen-retail-software.avif'
import Clients from "./Clients";

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [activeTab, setActiveTab] = useState("super-mart");

  const handleTabChange = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div>
      <Transparent />
      <section className="about-section py-4" style={{ backgroundColor: '#fff' }}>
        <div className="container mt-3">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-heading">
                <h2 className="subtitle" style={{ color: "var(--secondary-color)" }}>
                  Smart POS, Your Business Ally
                </h2>
                <h3
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Elevate Efficiency With Our Point Of Sale (POS) System
                </h3>
              </div>
              <p>
                Step into a new era of business management with our cutting-edge
                <strong> Retail Software</strong>. We're not just redefining
                transactions; we're revolutionizing the way you run your
                business. Say goodbye to complexity, and welcome streamlined
                operations and unmatched efficiency. Explore the future of Point of Sale (POS) System
                solutions with us, where innovation meets seamless
                functionality, and success becomes your everyday companion.
              </p>
              <hr />

              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                   <li
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "5px",      
                      paddingTop: "2px",                
                    }}>
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Tailored POS adapting to your business needs.
                    </li>
                    <li
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "5px",      
                      paddingTop: "2px",                
                    }}>
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
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "5px",      
                      paddingTop: "2px",                
                    }}>
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
                    }}>
                      <i
                        className="fa-solid fa-caret-right mt-2"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Grow confidently with a POS system that scales to your
                      business.
                    </li>
                  </ul>
                </div>
              </div>
              <button className="site-buttons">
                <Link to="/about" style={{ color: "var(--primary-color)" }}>
                  More Details <span>&rarr;</span>
                </Link>
              </button>
            </div>
            <div className="col-lg-6 col-12" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <img
                className="img-fluid"
                src={AboutPointOfSale}
                alt="Best Retail Software in Pakistan"
                title="Retail Software"
              />
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <FeaturesComponent />
      <section className="businesses py-5" style={{ backgroundColor: '#f1f3fb' }}>
        <div className="container">
          <div className="row  justify-content-between">
            <div className="line-img">
              <img src={lineImg} alt="Best Retail Software" title="Best Retail Software" loading="lazy" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="section-heading">
                <h2 className="subtitle">Retail POS</h2>
                <h3 className="main-heading">Next-Generation Retail POS System</h3>
              </div>
              <p className="mt-4">CapoBiz Retail software is crafted to amplify profitability and
                streamline operations for your retail enterprise. Say goodbye to
                complex transactions and hello to seamless management with our
                intuitive <strong>Point of Sale solution</strong>. Discover the simplicity of CapoBiz as it
                streamlines your billing process, ensuring swift and precise
                transactions that delight your customers.</p>

              <Link to="/retail-pos-system"> <button className="site-buttons">Know More <span>&rarr;</span></button></Link>
            </div>
            <div className="col-md-5">
              <img src={nextGenRetailSoftware} alt="best-retail-software" className="img-fluid" style={{ height: '300px' }} />
            </div>
          </div>
        </div>

      </section>

      <section className="new-section">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1200">
                <h2 className="subtitle">Meet the Innovators</h2>
                <h3 className="main-heading mb-4" style={{ color: '#fff', fontSize: '28px', fontWeight: 'lighter' }}>Technic Mentors, Pioneering <br /> POS Excellence</h3>
                <p className="text-light mb-5" style={{ fontSize: '15px', fontWeight: 'light' }}>Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and quality products and services. Our team is specialized and experienced and provides our clients with the finest experience ever. We provide comprehensive IT solutions tailored to the unique needs of our diverse client base, which includes commercial clients, government agencies, educational institutions, and schools.</p>
                <button className="site-buttons"><a href="https://technicmentors.com" rel="noreferrer" target="_blank" className="text-light">Visit Site <span>&rarr;</span></a></button>
              </div>
              <div >
                {/* <img className="new-img" src={WhyPOS} alt="why-pos-software" /> */}
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
                <div className="col-md-4 technic-mentors" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
                  <p className="" style={{ fontSize: '20px', color: '#fff' }}>Innovative Solutions</p>
                  <p>innovation is not just a trait; it's our DNA. We redefine solutions, setting the standard for Point-of-Sale excellence.</p>
                </div>
                <div className="col-md-4 technic-mentors" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <p className="" style={{ fontSize: '20px', color: '#fff' }}>Collaborative Partnerships</p>
                  <p>Fuel success through collaborative partnerships with Technic Mentors, where innovation meets seamless cooperation.</p>
                </div>
                <div className="col-md-4" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                  <p className="" style={{ fontSize: '20px', color: '#fff' }}>Quality And Security</p>
                  <p style={{ fontSize: '15px', color: '#fff' }}>Elevating businesses through unwavering commitment to quality and security, ensuring a seamless and secure experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="restaurant-section">
          <div className="restaurant-overlay">
            <div className="container">
              <div className="row g-5 d-flex align-items-center">
                <div className="col-md-5">
                  <img src={RestaurantPOS} alt="Best Retail Software" className="img-fluid" />
                </div>
                <div className="col-md-6 mb-3">
                  <div className="section-heading">
                    <h2 className="subtitle">
                      CapoBiz Restaurant Management System
                    </h2>
                    <h3 className="main-he">
                      Efficient And Intuitive Restaurant Management
                    </h3>
                  </div>
                  <p className="mt-4">A restaurant management system serves as the backbone of a successful restaurant business, offering a centralized platform to streamline operations and enhance efficiency. </p>
                  <Link to="/best-pos-system-for-restaurant"><button className="site-buttons">Learn More <span>&rarr;</span></button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pills-tab-section py-4 "
        style={{ backgroundColor: "#FAFAFA" }}
      >

        <div className="container pt-5 pb-2">

          <div className="row">
            <div className="mb-5 text-center">
              <h2 className="subtitle">For One, For All</h2>
              <h3 className="main-heading">Discover the Versatile Applications of Our POS Solutions</h3>
            </div>
            <div
              className="col-md-12 jutify-content-center py-2 mb-3 align-items-center" style={{ boxShadow: '0 0 10px rgba(204, 204, 204, 0.8)', borderRadius: '25px', backgroundColor: '#fff' }}>
              <ul
                className="nav nav-tabs d-flex align-items-center justify-content-center industries nav-justified gap-2"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab text-nowrap ${activeTab === "super-mart" ? "active" : ""
                      }`}
                    id="super-mart-tab"
                    data-mdb-toggle="pill"
                    href="#super-mart"
                    role="tab"
                    onClick={(e) =>
                      handleTabChange("super-mart", e)
                    }
                    aria-controls="super-mart"
                    aria-selected={activeTab === "super-mart"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '12px',
                      borderRadius: "25px",
                      color: activeTab === "super-mart" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "super-mart" ? "var(--secondary-color)" : "#f1f3fb",
                    }}
                  >
                    Super Mart
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab text-nowrap ${activeTab === "pharmacy" ? "active" : ""
                      }`}
                    id="pharmacy-tab"
                    data-mdb-toggle="pill"
                    href="#pharmacy"
                    role="tab"
                    onClick={(e) => handleTabChange("pharmacy", e)}
                    aria-controls="pharmacy"
                    aria-selected={activeTab === "pharmacy"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '12px',
                      borderRadius: "25px",
                      color: activeTab === "pharmacy" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "pharmacy" ? "var(--secondary-color)" : "#f1f3fb",
                    }}
                  >
                    Pharmacy
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab text-nowrap ${activeTab === "fertilizers-shop" ? "active" : ""
                      }`}
                    id="fertilizers-shop-tab"
                    data-mdb-toggle="pill"
                    href="#fertilizers-shop"
                    role="tab"
                    onClick={(e) => handleTabChange("fertilizers-shop", e)}
                    aria-controls="fertilizers-shop"
                    aria-selected={activeTab === "fertilizers-shop"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '12px',
                      paddingBottom: '14px',
                      borderRadius: "25px",
                      color: activeTab === "fertilizers-shop" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "fertilizers-shop" ? "var(--secondary-color)" : "#f1f3fb",
                    }}
                  >
                    Fertilizers Shop
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab text-nowrap ${activeTab === "trading-pos" ? "active" : ""
                      }`}
                    id="trading-pos-tab"
                    data-mdb-toggle="pill"
                    href="#trading-pos"
                    role="tab"
                    onClick={(e) => handleTabChange("trading-pos", e)}
                    aria-controls="trading-pos"
                    aria-selected={activeTab === "trading-pos"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '12px',
                      borderRadius: "25px",
                      color: activeTab === "trading-pos" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "trading-pos" ? "var(--secondary-color)" : "#f1f3fb",
                    }}
                  >
                    Trading
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab text-nowrap ${activeTab === "mobile-shop-pos" ? "active" : ""
                      }`}
                    id="mobile-shop-pos-tab"
                    data-mdb-toggle="pill"
                    href="#mobile-shop-pos"
                    role="tab"
                    onClick={(e) => handleTabChange("mobile-shop-pos", e)}
                    aria-controls="mobile-shop-pos"
                    aria-selected={activeTab === "mobile-shop-pos"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '12px',
                      borderRadius: "25px",
                      color: activeTab === "mobile-shop-pos" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "mobile-shop-pos" ? "var(--secondary-color)" : "#f1f3fb",
                    }}
                  >
                    Mobile Shop
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-12 tab-detail"

            >
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${activeTab === "super-mart" ? "active" : ""
                    }`}
                  id="super-mart"
                  role="tabpanel"
                  aria-labelledby="super-mart-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-lg-7 col-md-6 col-12">
                        <p >
                          For supermarts, reliable Point of Sale (POS) software is essential to efficiently manage vast product ranges, extensive inventory, and high transaction volumes. The system ensures optimal stock levels, minimizing the risks of stockouts or overstocking. With integrated features like secure payment processing and customer loyalty programs, POS software enhances the overall shopping experience.<br /> Providing quick access to sales reports and analytics, it empowers supermart owners with valuable insights for informed decision-making. In summary, POS software is a crucial tool for supermarts, streamlining operations and contributing to customer satisfaction.
                        </p>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12 d-flex justfiy-content-end">
                        <img
                          src={SuperMartPOS}
                          className="img-fluid"
                          alt="Supermarket POS software Pakistan"
                          title="Supermarket POS software Pakistan"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "pharmacy" ? "active" : ""
                    }`}
                  id="pharmacy"
                  role="tabpanel"
                  aria-labelledby="pharmacy"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the pharmaceutical realm, the role of Point of Sale (POS) software is paramount. It serves as a cornerstone for managing diverse product inventories, prescription transactions, and customer interactions. POS systems in pharmacies contribute significantly to the accuracy and efficiency of prescription processing, helping pharmacists keep track of medication stock levels and ensuring timely restocking to meet patient needs. Integrated features such as barcode scanning and secure payment processing streamline the checkout process, minimizing errors and enhancing customer service. Additionally, POS software in pharmacies often includes regulatory compliance tools, ensuring adherence to healthcare standards and facilitating accurate record-keeping.{" "}
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={PharmacyPOS}
                          className="img-fluid"
                          alt="Pharmacy POS software Pakistan"
                          title="Pharmacy POS software Pakistan"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "fertilizers-shop" ? "active" : ""}`}
                  id="fertilizers-shop"
                  role="tabpanel"
                  aria-labelledby="fertilizers-shop"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          For fertilizer shops, Point of Sale (POS) software is crucial. It efficiently manages inventory, sales transactions, and customer interactions. POS systems help track fertilizer stock levels, prevent overstocking or stockouts, and streamline the checkout process with features like barcode scanning. The integration of secure payment processing enhances customer service, while sales reports provide valuable insights for informed decision-making. In summary, POS software is essential for fertilizer shops, optimizing inventory management and improving overall retail efficiency.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={FertilizersPOS}
                          className="img-fluid"
                          alt="Fertilizers POS"
                          title="Fertilizers POS"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "trading-pos" ? "active" : ""}`}
                  id="trading-pos"
                  role="tabpanel"
                  aria-labelledby="trading-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p >
                          In trading shops, the adoption of Point of Sale (POS) software is instrumental for optimizing various aspects of daily operations. This technology streamlines inventory management, automates sales transactions, and enhances overall efficiency in the trading business. POS systems provide real-time insights into stock levels, aiding traders in maintaining optimal inventory levels and preventing product shortages or excesses.<br /><br /> The integration of features such as secure payment processing and sales tracking contributes to accurate financial management and customer service improvement. With POS software, trading shops can streamline their processes, reduce errors in transactions, and gain valuable insights into product performance, ensuring a more organized and profitable trading environment.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={TradingPOS}
                          className="img-fluid"
                          alt="Trading POS"
                          title="Trading POS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade show ${activeTab === "mobile-shop-pos" ? "active" : ""
                    }`}
                  id="mobile-shop-pos"
                  role="tabpanel"
                  aria-labelledby="mobile-shop-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                        In mobile shops, POS software simplifies daily tasks by streamlining inventory management, automating sales, and improving customer service. It offers real-time stock tracking, helping prevent shortages or overstocking. Secure payment processing and accurate sales tracking enhance financial management, while its efficiency minimizes errors and optimizes the overall customer experience.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={MobileShopPOS}
                          className="img-fluid"
                          alt="Mobile POS system Pakistan"
                          title="Mobile POS system Pakistan"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="multipurpose-pos py-5">
        <div className="bg-overlay">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-9 text-center">
                <h2 className="subtitle" >Multipurpose Business Software</h2>
                <h3 className="main-heading text-white">Elevating Your Business Beyond Simple POS</h3>
                <p>Enter a new era of operational excellence with our Point of Sale Software, transcending the limitations of traditional POS systems. Beyond a Simple POS, our innovation seamlessly integrates robust Stock & Inventory Management functionalities, ensuring impeccable control. Acting as a dynamic Inventory Management System, our solution transforms transactions into strategic business empowerment. Explore a realm where our POS becomes a catalyst for streamlined operations, strategic decision-making, and unparalleled growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQs />
      <CTA />
    </div>
  );
}

export default Home;
