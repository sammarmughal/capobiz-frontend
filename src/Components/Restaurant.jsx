import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import RestaurantPOS from "../Assets/Images/restaurant-management-system.avif";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssessmentIcon from "@mui/icons-material/Assessment";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PeopleIcon from "@mui/icons-material/People";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import posIntro from '../Assets/Images/restaurant-pos-intro.avif'
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "./Clients";


function Restaurant() {

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div>
      <section className="restaurant-header py-7">
        <div className="container">
          <div className="row g-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h1 className="subtitle mb-3">Best POS System For Restaurant</h1>
                <h2 className="main-heading text-light mb-4">
                  Enhancing Restaurant Efficiency And Service
                </h2>
              </div>
              <p className="text-light lead">
                Unlock the potential of your restaurant with CapoBiz's
                innovative management software, seamlessly blending culinary
                creativity with operational excellence.
              </p>
              <div className="head-buttons mt-5">
                <Link to="/Signup">
                  <button className="site-buttons text-light">
                    {" "}
                    Ask For A Demo <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={RestaurantPOS}
                alt="restaurant-pos"
                className="img-fluid restaurant-pos"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="restaurant-pos-intro">
        <div className="restaurant-intro-overlay">
        <div className="container">
          <div className="row py-5 g-5">
            <div className="col-md-7" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h2 className="subtitle">
                Empowering Restaurants for Success
                </h2>
                <h3 className="main-heading">
                The Role of a Restaurant Management System
                </h3>
              </div>
              <p>A best POS system for restaurant management serves as the backbone of a successful restaurant business, offering a centralized platform to streamline operations and enhance efficiency. From managing reservations and orders to tracking inventory and analyzing sales data, a robust restaurant management system automates tedious tasks, improves decision-making, and ensures seamless operations.<br /><br /> By leveraging technology to optimize workflows and enhance customer experiences, a restaurant management system empowers restaurant owners to focus on delivering exceptional dining experiences and driving business growth.</p>
              <Link to='/contact'><button className="site-buttons">Grow Your Restaurant <span>&rarr;</span></button></Link>
            </div>

            <div className="col-md-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={posIntro} alt="restaurant-pos" className="img-fluid" />
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      <Clients />

      <section
        className="features-of-restaurant-software py-5"
        style={{ backgroundColor: "#Fafafa" }}
      >
        <div className="container">
          <div className="section-header mb-5 text-center">
            <h2 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">What Does this system offer?</h2>
            <h3 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Special Features Of CapoBiz Restaurant Management System
            </h3>
          </div>
          <div className="row">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <OutdoorGrillIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Products & Production Management</p>
                  <p>
                    CapoBiz restaurant management system helps you keep an eye
                    on the products and their used amount in different recipes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ShowChartIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Stock Management</p>
                  <p>
                    Be one step ahead! CapoBiz helps you preempt and maintain
                    the stock of your hottest recipes. With this feature, you
                    never go out-of-stock, nor do you face over-stocking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ShoppingBasketIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Sales & Purchase Management</p>
                  <p>
                    Sales and purchases are the most important aspect of your
                    restaurant. Keep track of your daily sold out food items and
                    purchased food items.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <CurrencyExchangeIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Accounts & Expenses Management</p>
                  <p>
                    With CapoBiz, you have a completely transparent accounting
                    and expenses management system, be it employee or customer
                    accounts, or daily business expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <PeopleIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>People Management</p>
                  <p>
                    Manage the record of your chefs and other working staff,
                    have complete record of everyone's performance, and create
                    multiple system users as your business requirements.
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
                  <p style={{fontSize: '20px'}}>Effortless Billing And Invoicing</p>
                  <p>
                    CapoBiz streamlines billing and invoicing with seamless
                    precision, ensuring efficient transactions for your
                    restaurant.
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
                  <p style={{fontSize: '20px'}}> Reporting And Analytics</p>
                  <p>
                    CapoBiz offers comprehensive reporting capabilities,
                    providing valuable insights to optimize business
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <AddToDriveIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <p style={{fontSize: '20px'}}>Data Backup And Security</p>
                  <p>
                    CapoBiz ensures peace of mind with complete data backup and
                    security, safeguarding your restaurant's valuable
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-features py-4">
        <div className="container">
          
          <div className="row d-flex justify-content-center">
          <div className="section-header text-center mb-4">
            <h2 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">What's more??</h2>
            <h3 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200" >
              More Compelling Reasons To Have CapoBiz At Your Restaurant
            </h3>
            <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Discover More Compelling Reasons To Choose CapoBiz for Your Restaurant. Elevate your restaurant's performance with CapoBiz Restaurant Management System. From efficient table management to streamlined inventory tracking, CapoBiz offers a comprehensive solution to drive success in your restaurant business.</p>
          </div>
          
            <div className="col-md-5 more-feature-col-1" style={{backgroundColor: '#f8f8f8', padding: '14px', border: '0.5px solid #ccc'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                
                <ul style={{lineHeight: "2rem", listStyle: 'none', padding: '0', margin: '0'}}>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Table Management:</span> CapoBiz efficiently organizes seating arrangements and optimizes dining space utilization, ensuring seamless table turnover and enhanced customer satisfaction.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Menu & Recipe Management:</span> Elevate your culinary offerings with CapoBiz's comprehensive menu and recipe management features, empowering you to customize menus and standardize recipes effortlessly.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Order Management:</span> CapoBiz streamlines order processing with intuitive interfaces and automated workflows, ensuring accuracy and speed in every transaction for exceptional service delivery.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Inventory Management:</span> Take control of your inventory with CapoBiz's robust system, tracking stock levels and automating replenishment processes to optimize inventory and reduce costs.</li>
                </ul>
            
            </div>

            <div className="col-md-5 more-feature-col-2" style={{backgroundColor: '#f8f8f8', padding: '14px', border: '0.5px solid #ccc'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
            <ul style={{lineHeight: "2rem", listStyle: 'none', padding: '0', margin: '0'}}>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Kitchen Management:</span> CapoBiz enhances kitchen operations with streamlined workflows and real-time communication, minimizing wait times and ensuring timely food delivery for superior culinary experiences.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Customer Relationship Management:</span> Strengthen customer relationships with CapoBiz's integrated CRM features, capturing customer data and personalizing interactions to drive loyalty and repeat business.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Delivery Management:</span> Simplify delivery management with CapoBiz's comprehensive system, optimizing delivery processes and providing real-time tracking for exceptional delivery experiences.</li>
                    
                </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Restaurant;
