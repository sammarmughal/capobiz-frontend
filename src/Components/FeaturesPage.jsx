import {
  SupportAgent,
  Inventory2Outlined,
  Equalizer,
  ShoppingCartCheckout,
  Warehouse,
  Loyalty,
  CurrencyExchange,
  GroupAdd,
  VolunteerActivism,
  Paid,
  PieChart,
  PeopleAlt,
} from "@mui/icons-material";
import { css } from "@mui/styled-engine";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import customFeatures from "../Assets/Images/pos-custom-features.avif";
import CTA from "./CTA";

function FeaturesPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const Features = [
    {
      id: 1,
      icon: <Inventory2Outlined />,
      slug: "inventory-management",
      title: "Inventory Management",
      description:
        "Efficiently track and manage your stock levels with our comprehensive Inventory Management system.",
    },
    {
      id: 2,
      icon: <Paid />,
      slug:"salaries-expense-management",
      title: "Salaries & Expense Management",
      description:
        "Effortlessly handle payroll and expenses with our Salaries & Expense Management module, ensuring accurate and timely financial tracking.",
    },
    {
      id: 3,
      icon: <Warehouse />,
      slug:"multi-warehouse-management",
      title: "Multi Warehouse Management",
      description:
        "Seamlessly manage and monitor inventory across multiple warehouses with our Multi Warehouse Management feature. ",
    },
    {
      id: 4,
      icon: <GroupAdd />,
      slug:"accounts-management",
      title: "Accounts Management",
      description:
        "Simplify your financial processes with our comprehensive Accounts Management system",
    },
    
    {
      id: 5,
      icon: <CurrencyExchange />,
      slug:"trading-management",
      title: "Trading Management",
      description:
        "Enhance your trading operations with our robust Trading Management capabilities.",
    },
    {
      id: 6,
      icon: <ShoppingCartCheckout />,
      slug:"sales-purchase-management",
      title: "Sales & Purchase Management",
      description:
        "Streamline your transactions with our integrated Sales & Purchase Management tools.",
    },
    {
      id: 7,
      icon: <Loyalty />,
      slug:"products-production-management",
      title: "Products & Production Management",
      description:
        "Refine your product lifecycle and enhance production workflows with our Products & Production Management solution.",
    },
    {
      id: 8,
      icon: <VolunteerActivism />,
      slug:"customer-relationship-management",
      title: "Customer Relationship Management",
      description:
        "Build and maintain strong customer relationships with our intuitive Customer Relationship Management tools.",
    },
    {
      id: 9,
      icon: <Equalizer />,
      slug:"sales-forecasting",
      title: "Sales Forecasting",
      description:
        "Anticipate market trends and make informed decisions with our powerful Sales Forecasting feature, providing valuable insights into future sales trends.",
    },
    {
      id: 10,
      icon: <PieChart />,
      slug:"comprehensive-reporting",
      title: "Comprehensive Reporting",
      description:
        "Gain deep insights into your business performance with our Comprehensive Reporting feature, offering detailed analysis and customizable reports for informed decision-making.",
    },
    {
      id: 11,
      icon: <PeopleAlt />,
      slug:"people-management",
      title: "People Management",
      description:
        "Efficiently manage your workforce with our People Management feature, facilitating tasks such as scheduling, attendance tracking, and employee performance evaluation.",
    },
    {
      id: 12,
      icon: <SupportAgent />,
      slug:"24-7-support",
      title: "24/7 Support",
      description:
        "Receive round-the-clock assistance and guidance with our dedicated 24/7 Support feature, ensuring uninterrupted operation and peace of mind for your business.",
    },
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  Explore Our{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Features Showcase
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="features-intro"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center features-description">
              <div className="features-content">
                <h2 className="subtitle">Feature Fusion</h2>
                <h3 className="main-heading">
                  Features That Ease Up Your Life As A Business Owner
                </h3>
                <p>
                  Immerse yourself in a world of unparalleled business
                  efficiency with CapoBiz. Our feature-packed system is
                  meticulously crafted to be your ally in navigating the dynamic
                  landscape of commerce. Experience the ease of managing
                  transactions, inventory, and customer interactions seamlessly.
                  Stay steps ahead of your competitors as you leverage the power
                  of CapoBiz to streamline operations, gain valuable insights,
                  and provide an unmatched customer experience. Explore our
                  features showcase, elevate your business, stand out, and
                  thrive with the innovative features that redefine the essence
                  of convenience for business owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row d-flex  ">
            {featuresData.map((curElem) => {
              const { id, icon, title, description, slug } = curElem;
              return (
                <div
                  key={id}
                  className="col-md-4 col-12 features-col mb-4 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <Link to={`/pos-features/${slug}`} className="text-decoration-none">                  
                    <div className="card features-card ">
                      <div className="card-content ">
                        {React.cloneElement(icon, {
                          style: {
                            color: "var(--secondary-color)",
                            fontSize: "35px",
                          },
                          className: "features-icons",
                        })}
                        <p
                          style={{
                            fontSize: "21px",
                            color: "var(--primary-color)",
                          }}
                          className="mt-3 feature-title-home"
                        >
                          {" "}
                          {title}
                        </p>
                        <p>{description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="custom-features p-4"
        style={{ backgroundColor: "#fafafa" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="custom mb-3 mt-4">
                <h2 className="subtitle">Need Custom Features?</h2>
                <h3 className="main-heading">
                  Tailored Innovation: Your Business, Your Features
                </h3>
              </div>

              <p>
                Embrace tailored innovation with our advanced retail software!
                Your business is unique, and so are its needs. Our system goes
                beyond the standard features, offering you the freedom to infuse
                custom functionalities that align perfectly with your
                operations. From specialized reporting tools to unique payment
                integrations, envision the features you need, and we'll bring
                them to life. This is your journey – let's customize success
                together!
              </p>
              <Link to="/contact">
                <button className="site-buttons">
                  Ask For Customization <span>&rarr;</span>
                </button>
              </Link>
            </div>

            <div className="col-md-5 mt-4">
              <img
                src={customFeatures}
                alt="custom-pos-features"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="mb-5 mt-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <div className="container call-to-action">
          <div className="cta-overlay">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-10 p-5 text-center text-light">
                <h2 className="main-heading text-light">
                  Transform Your Business Today!
                </h2>
                <p className="mb-5 text-light">
                  Boost productivity with CapoBiz – the ultimate solution for
                  streamlined transactions and exceptional business management.
                  Start today to shape a smarter, more efficient future.{" "}
                </p>
                <Link to="/Signup">
                  <button className="site-buttons text-light">
                    Get A Demo <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesPage;
