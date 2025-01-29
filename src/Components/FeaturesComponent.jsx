import {
  Inventory2Outlined,
  ShoppingCartCheckout,
  Warehouse,
  Loyalty,
  CurrencyExchange,
  GroupAdd,
} from "@mui/icons-material";
import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";

function FeaturesComponent() {
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
      id: 3,
      icon: <Warehouse />,
      slug: "multi-warehouse-management",
      title: "Multi Warehouse Management",
      description:
        "Easily oversee and control inventory across multiple locations with our Multi Warehouse Management feature.",
    },
    {
      id: 4,
      icon: <Loyalty />,
      slug: "products-production-management",
      title: "Products & Production Management",
      description:
        "Optimize your product lifecycle and production processes with our Products & Production Management system.",
    },
    {
      id: 5,
      icon: <CurrencyExchange />,
      slug: "trading-management",
      title: "Trading Management",
      description:
        "Enhance your trading operations with our robust Trading Management capabilities.",
    },
    {
      id: 2,
      icon: <ShoppingCartCheckout />,
      slug: "sales-purchase-management",
      title: "Sales & Purchase Management",
      description:
        "Streamline your transactions with our integrated Sales & Purchase Management tools.",
    },
    {
      id: 6,
      icon: <GroupAdd />,
      slug: "accounts-management",
      title: "Accounts Management",
      description:
        "Simplify your financial processes with our comprehensive Accounts Management system",
    },
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center ">
            <div
              className="p-2 mt-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <h2 className="subtitle">Features Showcase</h2>
              <h3 className="main-heading">
                Harmonizing Brilliance In Our POS Software
              </h3>
            </div>
            {featuresData.map((curElem) => {
              const { id, icon, title, description, slug } = curElem;
              return (
                <div
                  key={id}
                  className="col-md-6 col-lg-4 col-12 features-col mb-4 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <Link
                    to={`/pos-features/${slug}`}
                    className="text-decoration-none"
                  >
                    <div className="card features-card">
                      <div className="card-content">
                        <Suspense fallback={<div>Loading...</div>}>
                          {React.cloneElement(icon, {
                            style: {
                              color: "var(--secondary-color)",
                              fontSize: "35px",
                            },
                            className: "features-icons",
                          })}
                        </Suspense>
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

            <div
              className="mb-5 mt-4 text-center"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1200"
            >
              <Link to="/pos-features">
                <button className="site-buttons">
                  View All Features <span>&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesComponent;
