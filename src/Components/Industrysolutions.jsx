import React, { useState } from "react";
// import FeaturesComponent from "./FeaturesComponent";
import RetailShop from "../Assets/Images/retail-shop-pos.avif";
import SuperMartPOS from "../Assets/Images/super-mart-pos.avif";
import RestaurantPOS from "../Assets/Images/restaurant-pos-software.avif";
import PharmacyPOS from "../Assets/Images/pharmacy-pos.avif";
import FertilizersPOS from "../Assets/Images/pos-for-fertilizers-shop.avif";
import TradingPOS from "../Assets/Images/pos-for-trading-business.avif";
import MobileShopPOS from "../Assets/Images/pos-for-mobile-shop.avif";
import accountingSoftware from "../Assets/Images/accounting-software.avif";
import manufacturingManagement from "../Assets/Images/manufacturing-management.avif";
import bookingManagement from "../Assets/Images/booking-management-software.avif";
import distributionSoftware from "../Assets/Images/disbtribution-management-software.avif";
import realEstateSoftware from "../Assets/Images/real-estate-management-software.webp";
import installmentManagement from "../Assets/Images/installment-management-software.avif";
import VapePOS from "../Assets/Images/vape-shop-pos.avif";

function Industrysolutions() {
  const [activeTab, setActiveTab] = useState("retail-shop");

  const handleTabChange = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  A POS For Diverse{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Business Needs
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-services py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 mb-3">
              <div className="section-header">
                <h2>Covering More Diverse Businesses</h2>
                <p>
                  We offer tailored retail software solutions for all
                  businesses!
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <button className="services-button">Retail Shop </button>
              <button className="services-button">Factory</button>
              <button className="services-button">Pharmacy</button>
              <button className="services-button">Garments Shop</button>
              <button className="services-button">Grocery Store</button>
              <button className="services-button">Education</button>
              <button className="services-button">Real Estate</button>
              <button className="services-button">Manufacturing</button>
              <button className="services-button">Trading</button>
              <button className="services-button">Super store software</button>
              <button className="services-button">Installment Business</button>
              <button className="services-button">Restaurant </button>
              <button className="services-button">Gym Management</button>
              <button className="services-button">Fertilizers Business</button>
              <button className="services-button">Transport</button>
              <button className="services-button">Booking</button>
              <button className="services-button">Distribution Software</button>
              <button className="services-button">Commission Agents</button>
              <button className="services-button">Hotels</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pills-tab-section px-2 py-4 "
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="container-fluid pt-3 pb-2">
          <div className="row">
            <div className="mb-5 text-center">
              <h2 className="subtitle">For One, For All</h2>
              <h3 className="main-heading">
                Industries Empowered by Our POS Software
              </h3>
            </div>
            <div className="col-md-3 jutify-content-center align-items-center">
              <div className="row">
                <ul
                  className="nav nav-tabs industries nav-justified"
                  id="ex1"
                  role="tablist"
                >
                  {[
                    {
                      id: "retail-shop",
                      label: "Retail Shop",
                      icon: "fas fa-store",
                    },
                    {
                      id: "super-mart",
                      label: "Super Mart",
                      icon: "fas fa-shopping-cart",
                    },
                    {
                      id: "restaurants",
                      label: "Restaurant",
                      icon: "fas fa-utensils",
                    },
                    { id: "pharmacy", label: "Pharmacy", icon: "fas fa-pills" },
                    {
                      id: "fertilizers-shop",
                      label: "Fertilizers Shop",
                      icon: "fas fa-seedling",
                    },
                    {
                      id: "trading-pos",
                      label: "Trading",
                      icon: "fas fa-exchange-alt",
                    },
                    {
                      id: "mobile-shop-pos",
                      label: "Mobile Shop",
                      icon: "fas fa-mobile-alt",
                    },
                    {
                      id: "accounting-software",
                      label: "Accounting Software",
                      icon: "fas fa-calculator",
                    },
                    {
                      id: "manufacturing-pos",
                      label: "Manufacturing POS",
                      icon: "fas fa-industry",
                    },
                    {
                      id: "vape-shop-pos",
                      label: "Vape Shop POS",
                      icon: "fas fa-smoking",
                    },
                  ].map((tab) => (
                    <div className="col-md-12" key={tab.id}>
                      <li className="nav-item" role="presentation">
                        <a
                          className={`nav-link-tab text-start mb-2 ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          id={`${tab.id}-tab`}
                          data-mdb-toggle="pill"
                          href={`#${tab.id}`}
                          role="tab"
                          onClick={(e) => handleTabChange(tab.id, e)}
                          aria-controls={tab.id}
                          aria-selected={activeTab === tab.id}
                          style={{
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 15px",
                            borderRadius: "8px",
                            border:
                              activeTab === tab.id
                                ? "none"
                                : "2px solid var(--primary-color)",
                            color:
                              activeTab === tab.id
                                ? "#fff"
                                : "var(--primary-color)",
                            backgroundColor:
                              activeTab === tab.id
                                ? "var(--secondary-color)"
                                : "#f8f9fa",
                            boxShadow:
                              activeTab === tab.id
                                ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                                : "none",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <i
                            className={`${tab.icon} tab-icon`}
                            style={{ marginRight: "10px" }}
                          ></i>
                          {tab.label}
                        </a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-9 tab-detail">
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "retail-shop" ? "active" : ""
                  }`}
                  id="retail-shop"
                  role="tabpanel"
                  aria-labelledby="retail-shop-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          Retail POS software Pakistan plays a pivotal role in
                          enhancing the efficiency and productivity of Point of
                          sale system for retail shop. CapoBiz is a POS for
                          diverse business needs. It provides a centralized
                          platform for managing sales, inventory, and customer
                          transactions, streamlining operations and reducing the
                          likelihood of errors. With real-time tracking of stock
                          levels, POS software helps prevent stockouts and
                          overstock situations, ensuring that retailers can meet
                          customer demands effectively. Additionally, the
                          integration of Cloud-based retail management software
                          with payment gateways facilitates smooth and secure
                          transactions, enhancing the overall customer
                          experience. Overall, POS software is an indispensable
                          tool for modern AI-driven retail software solutions
                          businesses, offering a seamless and organized approach
                          to sales and inventory management.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={RetailShop}
                          className="img-fluid"
                          alt="Retail POS software Pakistan"
                          title="Retail POS software Pakistan"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "super-mart" ? "active" : ""
                  }`}
                  id="super-mart"
                  role="tabpanel"
                  aria-labelledby="super-mart-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In Pakistan, effective supermarket POS software is
                          essential for managing extensive product ranges, large
                          inventories, and high transaction volumes in
                          supermarts.
                          <strong>
                            {" "}
                            Supermarket POS software Pakistan{" "}
                          </strong>{" "}
                          solutions are designed to streamline operations,
                          ensuring balanced stock levels to prevent shortages or
                          overstocking. Features like secure payment integration
                          and loyalty program management enhance the shopping
                          experience for customers. <br />
                          Additionally, these systems provide real-time access
                          to analytics and sales data, empowering supermarket
                          owners in Pakistan to make informed business
                          decisions. In summary, investing in reliable
                          supermarket POS software in Pakistan is key to
                          boosting operational efficiency and customer
                          satisfaction in competitive retail environments.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={SuperMartPOS}
                          className="img-fluid"
                          alt="Supermarket POS Software Pakistan"
                          title="Supermarket POS Software Pakistan"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "restaurants" ? "active" : ""
                  }`}
                  id="restaurants"
                  role="tabpanel"
                  aria-labelledby="restaurants-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the dynamic environment of restaurants, a{" "}
                          <strong>Restaurant POS system with inventory</strong>{" "}
                          is indispensable for managing order processing,
                          payment transactions, and inventory control. This
                          system ensures swift and accurate order execution
                          while offering insights into sales trends and menu
                          performance, enabling informed decision-making for
                          restaurant owners. A comprehensive Restaurant POS
                          system with inventory also features table management
                          and seamlessly integrated payment processing,
                          enhancing operational efficiency and fostering a
                          smooth workflow between front-of-house and kitchen
                          staff. <br />
                          By streamlining day-to-day operations, such systems
                          not only optimize inventory management but also
                          elevate the dining experience for customers by
                          ensuring timely service and reducing errors. Investing
                          in a robust Restaurant POS system is essential for
                          modern restaurants aiming to stay competitive and
                          efficient.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={RestaurantPOS}
                          className="img-fluid"
                          alt="Restaurant POS system with inventory"
                          title="Restaurant POS system with inventory"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "pharmacy" ? "active" : ""
                  }`}
                  id="pharmacy"
                  role="tabpanel"
                  aria-labelledby="pharmacy"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the pharmaceutical sector,{" "}
                          <strong>Pharmacy POS software Pakistan</strong> is
                          essential for efficiently managing product
                          inventories, prescription sales, and customer
                          interactions. Designed to enhance prescription
                          accuracy, this software ensures timely restocking to
                          meet patient needs while maintaining operational
                          efficiency. <br />
                          Features like barcode scanning and secure payment
                          systems simplify checkout processes, reducing errors
                          and improving the overall customer experience.
                          Moreover, Pharmacy POS software Pakistan often
                          includes compliance tools to meet healthcare
                          standards, ensuring accurate record-keeping and
                          reliable operations for pharmacies across the country.
                          Adopting this advanced software is key for pharmacies
                          aiming to streamline their processes and provide
                          exceptional service.
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
                  className={`tab-pane fade show ${
                    activeTab === "fertilizers-shop" ? "active" : ""
                  }`}
                  id="fertilizers-shop"
                  role="tabpanel"
                  aria-labelledby="fertilizers-shop"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          {" "}
                          For fertilizer shops, POS software plays a vital role
                          in handling inventory, sales, and customer
                          transactions. It tracks stock levels, prevents
                          shortages or excess inventory, and simplifies
                          checkouts with barcode scanning. Secure payment
                          integration improves service, while sales analytics
                          provide actionable insights for better
                          decision-making. In summary, POS software is a key
                          tool for fertilizer shops, enhancing efficiency and
                          optimizing operations.{" "}
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={FertilizersPOS}
                          className="img-fluid"
                          alt="POS for Fertilizer Shop"
                          title="POS for Fertilizer Shop"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "trading-pos" ? "active" : ""
                  }`}
                  id="trading-pos"
                  role="tabpanel"
                  aria-labelledby="trading-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          {" "}
                          Trading shops benefit significantly from adopting POS
                          software to optimize daily operations. This technology
                          streamlines inventory management, automates sales, and
                          boosts overall efficiency. It offers real-time stock
                          insights, helping traders maintain proper inventory
                          levels while avoiding shortages or overstocking.{" "}
                          <br /> <br /> Secure payment processing and sales
                          tracking improve financial management and customer
                          service. With POS software, trading shops can reduce
                          errors, streamline workflows, and gain valuable
                          insights into product performance, fostering a more
                          organized and profitable business.{" "}
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={TradingPOS}
                          className="img-fluid"
                          alt="POS Software for Trading Shop"
                          title="POS Software for Trading Shop"
                        />
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
                          <strong>Mobile POS system Pakistan</strong> plays a
                          vital role in the efficient management of mobile shops
                          by streamlining inventory handling, automating
                          transactions, and elevating customer service quality.
                          This advanced system offers real-time stock insights,
                          helping shop owners avoid overstocking or shortages
                          while ensuring smooth operations. <br />
                          Equipped with secure payment processing and accurate
                          sales tracking features, the Mobile POS system
                          Pakistan minimizes errors and boosts operational
                          efficiency. By integrating this system, mobile shop
                          owners can enhance the customer experience and ensure
                          seamless business management tailored to the needs of
                          the local market.
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

                <div
                  className={`tab-pane fade show ${
                    activeTab === "accounting-software" ? "active" : ""
                  }`}
                  id="accounting-software"
                  role="tabpanel"
                  aria-labelledby="accounting-software"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          Elevate your business management experience with our
                          Point of Sale (POS) software, extending beyond
                          traditional functions. Seamlessly merging the roles of
                          a POS and Accounting Software, our solution transforms
                          into a comprehensive Accounts Management System.
                          Experience the convenience of handling transactions
                          and managing financial records seamlessly in one
                          unified platform. This innovative POS & Accounting
                          software not only simplifies your daily operations but
                          also acts as a Mini ERP, streamlining processes and
                          enhancing overall efficiency. Say goodbye to siloed
                          systems – embrace a holistic approach to business
                          management with our integrated solution.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={accountingSoftware}
                          className="img-fluid"
                          alt="Accounting Software"
                          title="Accounting Software"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "manufacturing-pos" ? "active" : ""
                  }`}
                  id="manufacturing-pos"
                  role="tabpanel"
                  aria-labelledby="manufacturing-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the dynamic landscape of the manufacturing
                          industry, our Point of Sale (POS) system emerges as a
                          game-changer, providing tailored solutions to meet
                          your specific needs. Seamlessly integrating with
                          manufacturing processes, our POS becomes a pivotal
                          tool for order management, production tracking, and
                          inventory control. Designed to enhance operational
                          efficiency, our solution serves as a Manufacturing
                          Industry POS, empowering businesses with features like
                          real-time production insights, inventory optimization,
                          and order fulfillment. Experience the synergy of
                          technology and manufacturing prowess with our
                          dedicated POS solution, engineered to elevate your
                          efficiency and profitability in the manufacturing
                          sector.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={manufacturingManagement}
                          className="img-fluid"
                          alt="Manufacturing POS"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "vape-shop-pos" ? "active" : ""
                  }`}
                  id="vape-shop-pos"
                  role="tabpanel"
                  aria-labelledby="vape-shop-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          CapoBiz is the perfect solution for vape shops looking
                          to streamline their operations and enhance their
                          customer experience. With CapoBiz's comprehensive Vape
                          Shop POS system, managing inventory becomes
                          effortless, allowing shop owners to keep track of a
                          wide variety of products, including e-liquids, vape
                          devices, and accessories. Our user-friendly interface
                          ensures quick and efficient transactions, minimizing
                          wait times for customers. CapoBiz also offers robust
                          reporting tools, enabling vape shop owners to analyze
                          sales trends, manage stock levels, and identify
                          top-selling items. Additionally, our POS system
                          integrates seamlessly with loyalty programs and
                          marketing tools, helping vape shops to retain
                          customers and boost sales. Whether you are running a
                          single store or managing multiple locations, CapoBiz's
                          Vape Shop POS system provides the reliability and
                          flexibility needed to succeed in the competitive vape
                          retail market.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={VapePOS}
                          className="img-fluid"
                          alt="Vape Shop POS"
                          title="Vape Shop POS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab content */}
            </div>
          </div>
        </div>
      </section>

      <section className="further py-4">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-md-5">
              <div className="card more-industries">
                <div className="content">
                  <img
                    src={installmentManagement}
                    alt="Installment Management System"
                    title="Installment Management System"
                    className="img-fluid"
                  />
                  <div className="text">
                    <p style={{ fontSize: "26px" }}>
                      Installment Management System
                    </p>
                    <p>
                      Beyond traditional Point of Sale (POS) functions, our
                      software seamlessly integrates installment management
                      capabilities. Effortlessly track and manage installment
                      payments, providing a streamlined and user-friendly
                      solution for businesses. Elevate your financial control
                      with our POS, ensuring a comprehensive approach to
                      transaction management that goes beyond the ordinary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card more-industries">
                <div className="content">
                  <img
                    src={realEstateSoftware}
                    alt="Real Estate Accounting System"
                    title="Real Estate Accounting System"
                    className="img-fluid"
                  />
                  <div className="text">
                    <p style={{ fontSize: "26px" }}>
                      Real Estate Accounting System
                    </p>
                    <p>
                      Discover unparalleled control over your real estate
                      ventures with our management software. Tailored for
                      efficiency, our solution streamlines property management,
                      tenant interactions, and financial tracking. Elevate your
                      real estate operations with a user-friendly platform that
                      ensures seamless management and optimization of your
                      property portfolio. Welcome to a new era of real estate
                      management, where precision and convenience converge for
                      unparalleled success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-2 d-flex justify-content-center">
            <div className="col-md-5">
              <div className="card more-industries">
                <div className="content">
                  <img
                    src={distributionSoftware}
                    alt="Distribution Management System"
                    title="Distribution Management System"
                    className="img-fluid"
                  />
                  <div className="text">
                    <p style={{ fontSize: "26px" }}>
                      Distribution Management System
                    </p>
                    <p>
                      Revolutionize your distribution processes with our
                      dedicated distribution software. Seamlessly manage
                      inventory, streamline order fulfillment, and optimize
                      logistics with a solution tailored for efficiency. From
                      order placement to delivery, our software ensures
                      precision, transparency, and enhanced control over your
                      distribution network. Experience the power of seamless
                      operations and elevated performance with our cutting-edge
                      distribution management software.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card more-industries">
                <div className="content">
                  <img
                    src={bookingManagement}
                    alt="Booking Management System"
                    title="Booking Management System"
                    className="img-fluid"
                  />
                  <div className="text">
                    <p style={{ fontSize: "26px" }}>
                      Booking Management System
                    </p>
                    <p>
                      Experience a new level of convenience in booking
                      management with our specialized software. Tailored for
                      efficiency, our solution streamlines the entire booking
                      process, from reservation to payment tracking. With
                      user-friendly interfaces and robust features, our booking
                      management software ensures precision and ease,
                      transforming your reservation operations. Embrace a
                      seamless and organized approach to bookings, optimizing
                      your business for success.
                    </p>
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

export default Industrysolutions;
