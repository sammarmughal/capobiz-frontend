import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SecurityIcon from "@mui/icons-material/Security";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import mockImage from "../Assets/Images/retail-software-mock-up-image.avif";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssessmentIcon from '@mui/icons-material/Assessment';
import retailPOSBenefits from '../Assets/Images/benefits-of-retail-pos.avif'
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "./Clients";



function Retail() {

  useEffect(() => {
    AOS.init();
  }, []);

  


  const [activeTab, setActiveTab] = useState("clothing-and-apparel");

  const handleTabChange = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };
  return (
    <div>
      <section className="retail-software-page py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h1>
                  Get The Best Retail POS System For Your Business
                </h1>
              </div>
              <p>
                CapoBiz Retail POS system is crafted to amplify profitability and
                streamline operations for your retail enterprise. Say goodbye to
                complex transactions and hello to seamless management with our
                intuitive POS solution. Discover the simplicity of CapoBiz as it
                streamlines your billing process, ensuring swift and precise
                transactions that delight your customers. Get the best retail POS system, with the power
                of CapoBiz, to reduce costs, drive profits for your business, and propel the
                growth of your retail store.
              </p>
              <Link to="/Signup">
                <button className="site-buttons">
                  View Demo <span>&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="features-of-retail-software py-5"
        style={{ backgroundColor: "#F1F3Fb" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <InventoryIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Advanced Inventory Management</p>
                  <p>
                    Take charge of your inventory with CapoBiz's intuitive
                    management tools, ensuring you have the right products at
                    the right time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <AccountBoxIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Seamless Accounting Integration</p>
                  <p>
                  Seamlessly integrate sales data with your accounting system, simplifying financial management and reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ReceiptLongIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Efficient Billing and Invoicing</p>
                  <p>
                  Speed up transactions with CapoBiz's swift billing processes and versatile payment options, ensuring customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <LocalShippingIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Supply Chain Optimization</p>
                  <p>
                  Optimize your supply chain operations with CapoBiz, facilitating smooth communication with suppliers and timely replenishment of stock.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <LoyaltyIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>CRM and Customer Loyalty</p>
                  <p>
                  Cultivate lasting customer relationships and encourage repeat business with CapoBiz's CRM tools and integrated loyalty programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <SecurityIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Business Intelligence And Security</p>
                  <p>
                  Harness actionable insights with CapoBiz's robust analytics while safeguarding your business data with advanced security measures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <AssessmentIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Comprehensive Reporting</p>
                  <p>
                  CapoBiz provides advanced reporting tools, delivering actionable insights to enhance and optimize business performance. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <CloudDoneIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Cloud-Based Management</p>
                  <p>
                  CapoBiz facilitates flexible and accessible management with its cloud-based platform, ensuring seamless control from anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Clients />
      </section>      

      <section
        className="mock-up-image py-5"
        style={{ backgroundColor: "" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={mockImage} alt="retail-pos-system" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="pills-tab-section py-4 "
        style={{ backgroundColor: "#F1F3Fb" }}
      >
        <div className="container pt-5 pb-2">
          <div className="row">
            <div className="mb-5 text-center">
              <h2 className="subtitle">Boost Your Sales</h2>
              <h3 className="main-heading">
                What Retail Businesses Are Supported By CapoBiz?
              </h3>
            </div>
            <div className="col-md-12 jutify-content-center align-items-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <ul
                className="nav nav-tabs industries nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab  mb-2 ${
                      activeTab === "clothing-and-apparel" ? "activetab" : ""
                    }`}
                    id="clothing-and-apparel-tab"
                    data-mdb-toggle="pill"
                    href="#clothing-and-apparel"
                    role="tab"
                    onClick={(e) => handleTabChange("clothing-and-apparel", e)}
                    aria-controls="clothing-and-apparel"
                    aria-selected={activeTab === "clothing-and-apparel"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      color:
                        activeTab === "clothing-and-apparel"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "clothing-and-apparel"
                          ? "#fff"
                          : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-shirt"
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color:
                          activeTab === "clothing-and-apparel"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Clothing And Apparel Stores{" "}
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${
                      activeTab === "electronics-shop" ? "activetab" : ""
                    }`}
                    id="electronics-shop-tab"
                    data-mdb-toggle="pill"
                    href="#electronics-shop"
                    role="tab"
                    onClick={(e) => handleTabChange("electronics-shop", e)}
                    aria-controls="electronics-shop"
                    aria-selected={activeTab === "electronics-shop"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      color:
                        activeTab === "electronics-shop"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "electronics-shop" ? "#fff" : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-laptop-medical"
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color:
                          activeTab === "electronics-shop"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Eelctronics & Appliances
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${
                      activeTab === "home-and-furniture-store" ? "activetab" : ""
                    }`}
                    id="home-and-furniture-store-tab"
                    data-mdb-toggle="pill"
                    href="#home-and-furniture-store"
                    role="tab"
                    onClick={(e) => handleTabChange("home-and-furniture-store", e)}
                    aria-controls="corporate-matters"
                    aria-selected={activeTab === "home-and-furniture-store"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      color:
                        activeTab === "home-and-furniture-store"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "home-and-furniture-store"
                          ? "#fff"
                          : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-couch"
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color:
                          activeTab === "home-and-furniture-store"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Home And Furniture Stores And Retailers
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${
                      activeTab === "sports-goods-store" ? "activetab" : ""
                    }`}
                    id="sports-goods-store-tab"
                    data-mdb-toggle="pill"
                    href="#sports-goods-store"
                    role="tab"
                    onClick={(e) => handleTabChange("sports-goods-store", e)}
                    aria-controls="sports-goods-store"
                    aria-selected={activeTab === "sports-goods-store"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      color:
                        activeTab === "sports-goods-store"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "sports-goods-store" ? "#fff" : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-baseball-bat-ball"
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color:
                          activeTab === "sports-goods-store"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Sporting Goods Stores And Retailers
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${
                      activeTab === "health-and-beauty" ? "activetab" : ""
                    }`}
                    id="health-and-beauty-tab"
                    data-mdb-toggle="pill"
                    href="#health-and-beauty"
                    role="tab"
                    onClick={(e) => handleTabChange("health-and-beauty", e)}
                    aria-controls="health-and-beauty"
                    aria-selected={activeTab === "health-and-beauty"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      paddingBottom: "14px",
                      color:
                        activeTab === "health-and-beauty"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "health-and-beauty" ? "#fff" : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-heart-pulse"
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        color:
                          activeTab === "health-and-beauty"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Health And Beauty Stores And Retailers
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link-tab mb-2 ${
                      activeTab === "jewelry-shops" ? "activetab" : ""
                    }`}
                    id="jewelry-shops-tab"
                    data-mdb-toggle="pill"
                    href="#jewelry-shops"
                    role="tab"
                    onClick={(e) => handleTabChange("jewelry-shops", e)}
                    aria-controls="jewelry-shops"
                    aria-selected={activeTab === "jewelry-shops"}
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      padding: "10px",
                      paddingBottom: "14px",
                      color:
                        activeTab === "jewelry-shops"
                          ? "var(--primary-color)"
                          : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "jewelry-shops" ? "#fff" : "#F1F3Fb",
                    }}
                  >
                    <i
                      class="fa-solid fa-3x fa-gem"
                      style={{
                        fontWeight: "bold",
                        display: "block",

                        color:
                          activeTab === "jewelry-shops"
                            ? "var(--primary-color)"
                            : "var(--primary-color)",
                      }}
                    ></i>
                    <br />
                    Jewelry & Accessories Boutiques
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-12 tab-detail" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "clothing-and-apparel" ? "active" : ""
                  }`}
                  id="clothing-and-apparel"
                  role="tabpanel"
                  aria-labelledby="clothing-and-apparel-tab"
                >
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Fashion Boutiques
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Sportswear Retailers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Formal Wear Shops
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Children's Clothing Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Lingerie Boutiques
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Vintage Clothing Shops
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "electronics-shop" ? "active" : ""
                  }`}
                  id="electronics-shop"
                  role="tabpanel"
                  aria-labelledby="electronics-shop-tab"
                >
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Consumer Electronics Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Computer and Accessories Retailers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Home Appliance Stores
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Mobile Phone Retailers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Audio and Video Equipment Shops
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Gaming Console Retailers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "home-and-furniture-store" ? "active" : ""
                  }`}
                  id="home-and-furniture-store"
                  role="tabpanel"
                  aria-labelledby="home-and-furniture-store-tab"
                >
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Furniture Showrooms
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Home Decor Boutiques
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Bedding and Mattress Stores
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Kitchenware Retailers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Lighting Fixture Shops
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Home Office Furniture Stores
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "sports-goods-store" ? "active" : ""
                  }`}
                  id="sports-goods-store"
                  role="tabpanel"
                  aria-labelledby="sports-goods-store"
                >
                   <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-5 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Furniture Showrooms
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Home Decor Boutiques
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Bedding and Mattress Stores
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5 col-12 d-flex justfiy-content-end">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Kitchenware Retailers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Lighting Fixture Shops
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Home Office Furniture Stores
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "health-and-beauty" ? "active" : ""
                  }`}
                  id="health-and-beauty"
                  role="tabpanel"
                  aria-labelledby="health-and-beauty"
                >
                   <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Cosmetics Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Skincare Centers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Hair and Beauty Salons Shops
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Wellness Centers
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Natural and Organic Beauty Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Perfume and Fragrance Shops
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "jewelry-shops" ? "active" : ""
                  }`}
                  id="jewelry-shops"
                  role="tabpanel"
                  aria-labelledby="jewelry-shops"
                >
                   <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4 col-12">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Fine Jewelry Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Fashion Jewelry Boutiques
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Watch Retailers
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-12 ">
                        <ul
                          className="industry"
                          style={{
                            padding: "0",
                            margin: "0",
                            listStyle: "none",
                            lineHeight: "4rem",
                          }}
                        >
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Handbag and Accessories Shops
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Sunglasses Stores
                          </li>
                          <li className="industry-list-icon">
                            <CheckCircleOutlineIcon className="industryicon" />
                            &nbsp;Artisanal Jewelry Designers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "mobile-shop-pos" ? "active" : ""
                  }`}
                  id="mobile-shop-pos"
                  role="tabpanel"
                  aria-labelledby="mobile-shop-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In mobile shops, Point of Sale (POS) software plays a
                          pivotal role in simplifying daily operations. It
                          efficiently manages inventory, automates sales
                          transactions, and enhances customer service. POS
                          systems in mobile shops provide real-time insights
                          into stock levels, preventing shortages or excesses.
                          With features like secure payment processing and sales
                          tracking, POS software contributes to accurate
                          financial management. The streamlined processes
                          enabled by POS software improve efficiency, reduce
                          errors, and ultimately enhance the overall customer
                          experience in mobile shops.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        {/* <img
                          src={MobileShopPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-of-retail-pos py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={retailPOSBenefits} alt="benefits-of-retail-pos-system" className="img-fluid" />
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h2 className="subtitle">Benefits Of CapoBiz</h2>
                <h3 className="main-heading">
                Empower Your Retail Business With CapoBiz POS Software
                </h3>
              </div>
              <p>
              Experience the transformative power of CapoBiz POS software tailored for retail businesses. Enjoy seamless operations, heightened efficiency, and enhanced customer satisfaction with our intuitive platform. From streamlined inventory management to swift transactions, CapoBiz equips you with the tools to make informed decisions, boost sales, and stay ahead of the competition. <br /><br /> With robust reporting, personalized customer engagement, and secure cloud-based management, CapoBiz is your ultimate partner for success in the retail industry.
              </p>
              <Link to="/Signup">
              <button className="site-buttons">Request A Demo <span>&rarr;</span></button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Retail;
