import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import posTerminals from "../Assets/Images/pos-terminals.avif";
import BarcodeScanner from "../Assets/Images/barcode-scanners-img.avif";
import ReceiptPrinter from "../Assets/Images/reciept-printers-img.avif";
import CashDrawer from "../Assets/Images/cash-drawers-img.avif";
import CustomerDisplays from "../Assets/Images/customer-displays-img.avif";
import CardReaders from "../Assets/Images/card-readers-img.avif";
import LabelPrinters from "../Assets/Images/label-printers.avif";
import POSTablets from "../Assets/Images/pos-tablets.avif";
import HandledScanner from "../Assets/Images/handheld-scanners.avif";
import DigitalScales from "../Assets/Images/digital-scales-img.avif";
import BiometricAttendance from "../Assets/Images/biometric-attendance-system.avif";
import FacialRecognition from "../Assets/Images/facial-recognition.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function Hardware() {
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
                  Essential Hardware For{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Optimal POS System
                  </span>{" "}
                  Performance
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hardware-intro py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2
                className="subtitle"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
              >
                Essential Hardware For Seamless POS
              </h2>
              <h3
                className="main-heading"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
              >
                Compatible POS Hardware Integration
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={posTerminals}
                    alt="POS Terminals"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    POS Terminals
                  </p>
                  <p>
                    <strong>POS terminals</strong> serve as the central hub for
                    your point-of-sale system, allowing cashiers to manage sales
                    data and execute transactions efficiently. These devices
                    typically feature user-friendly touchscreens and integrated
                    components such as card readers and customer displays. With
                    robust functionality, POS terminals ensure optimal system
                    performance while enhancing the checkout experience for both
                    staff and customers.
                  </p>
                  <Link to="/blog/what-is-pos-terminals-features-benefits-and-how-it-works">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={HandledScanner}
                    alt="Barcode Scanners"
                    title="Barcode Scanners"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Barcode Scanners
                  </p>
                  <p>
                    <strong>Barcode scanners</strong> play a pivotal role in
                    expediting the checkout process by accurately capturing
                    product details with a simple scan. These devices
                    significantly reduce manual input errors, ensuring fast and
                    error-free transactions. Their integration into your POS
                    system elevates operational efficiency and enhances the
                    overall shopping experience for customers.
                  </p>
                  <Link to="/blog/barcode-scanners-a-comprehensive-guide">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={ReceiptPrinter}
                    alt="Receipt Printers"
                    title="Receipt Printers"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Receipt Printers
                  </p>
                  <p>
                    <strong>Receipt printers</strong> are an indispensable part
                    of any POS system, providing customers with tangible proof
                    of their purchases. Utilizing cutting-edge thermal printing
                    technology, these devices ensure fast, reliable, and
                    high-quality receipts. Their durability and efficiency make
                    them an essential tool for maintaining smooth checkout
                    operations.
                  </p>
                  <Link to="/blog/receipt-printers-a-complete-guide-to-understanding-and-choosing-the-right-one">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CashDrawer}
                    alt="Cash Drawers"
                    title="Cash Drawers"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Cash Drawers
                  </p>
                  <p>
                    <storng>Cash drawers</storng> are designed to securely store
                    currency, coins, and receipts. These essential components
                    integrate seamlessly with your POS system, enabling them to
                    open automatically during transactions. Featuring dedicated
                    compartments for organized storage, cash drawers streamline
                    cash handling while ensuring security and convenience for
                    your team.
                  </p>
                  <Link to="/blog/cash-drawers-essential-tools-for-seamless-pos-operations">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CustomerDisplays}
                    alt="Customer Displays"
                    title="Customer Displays"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Customer Displays
                  </p>
                  <p>
                    <strong>Customer displays</strong> show transaction details
                    to customers in real-time. These devices can be standalone
                    units or integrated with POS terminals, enhancing
                    transparency and building trust at the point of sale.
                  </p>
                  <Link to="/blog/customer-displays-enhancing-transparency-and-trust-at-the-point-of-sale">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={CardReaders}
                    alt="Card Readers"
                    style={{ height: "180px" }}
                    title="Card Readers"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Card Readers
                  </p>
                  <p>
                    <strong>Card readers</strong> allow for the processing of
                    credit and debit card transactions. Modern card readers
                    support a variety of payment methods, including chip cards,
                    contactless payments, and mobile wallets.
                  </p>
                  <Link to="/blog/card-readers-enabling-seamless-transactions-in-the-modern-retail-landscape">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={LabelPrinters}
                    alt="Label Printers"
                    title="Label Printers"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Label Printers
                  </p>
                  <p>
                    <strong>Label printers</strong> are used for printing
                    product labels and price tags. They are vital for inventory
                    management and ensuring products are properly tagged and
                    priced on the shelves.
                  </p>
                  <Link to="/blog/capobiz-label-printers-essential-tools-for-product-labeling-and-inventory-management">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={POSTablets}
                    alt="POS Tablets"
                    style={{ height: "120px" }}
                    title="POS Tablets"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    POS Tablets
                  </p>
                  <p>
                    <strong>POS tablets</strong> offer a portable solution for
                    sales transactions, ideal for businesses with mobile sales
                    needs or limited counter space. These devices can run the
                    same POS software as traditional terminals.
                  </p>
                  <Link to="/blog/pos-tablets-a-capobiz-portable-solution-for-modern-sales-transactions">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <div className=" hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={BarcodeScanner}
                    alt="Handheld Scanners"
                    title="Handheld Scanners"
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Handheld Scanners
                  </p>
                  <p>
                    <strong>Handheld scanners</strong> are versatile devices
                    used for inventory management, price checks, and mobile
                    transactions. They offer mobility and convenience, making
                    them ideal for busy retail environments.
                  </p>
                  <Link to="/blog/capobiz-handheld-scanners-the-perfect-tools-for-mobility-and-efficiency">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={DigitalScales}
                    style={{ height: "180px" }}
                    alt="Digital Scales"
                    title="Digital Scales"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Digital Scales
                  </p>
                  <p>
                    <strong>Digital scales</strong> are essential for businesses
                    that sell products by weight, such as grocery stores and
                    delis. They integrate with POS systems to ensure accurate
                    pricing based on weight measurements.
                  </p>
                  <Link to="/blog/capobiz-digital-scales-precision-tools-for-weight-based-transactions">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <div className="hardware-box">
                <div className="hardware-img ">
                  <img
                    src={BiometricAttendance}
                    alt="Biometric Attendance System"
                    title="Biometric Attendance System"
                    style={{ height: "160px" }}
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Biometric Attendance System
                  </p>
                  <p>
                    <strong>Biometric attendance systems</strong> use
                    fingerprint or facial recognition to accurately track
                    employee attendance and ensure secure access. These systems
                    enhance security and streamline workforce management.
                  </p>
                  <Link to="/blog/capobiz-biometric-attendance-system-revolutionizing-workforce-management">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hardware-box  ">
                <div className="hardware-img ">
                  <img
                    src={FacialRecognition}
                    alt="Face Recognition System"
                    title="Face Recognition System"
                    style={{ height: "160px" }}
                    className="img-fluid"
                  />
                </div>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                >
                  <p style={{ fontSize: "20px" }} className="fw-bold">
                    Face Recognition System
                  </p>
                  <p>
                    <strong>Facial recognition</strong> systems offer advanced
                    security and efficiency by identifying individuals through
                    unique facial features. Ideal for both attendance tracking
                    and customer interactions, these systems enhance overall
                    operational security.
                  </p>
                  <Link to="/blog/face-recognition-system">
                    <button className="btn read-more-button" type="button">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
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
                  Experience unmatched efficiency with CapoBiz – your partner in
                  seamless operations and smarter business management. Take the
                  leap now for a brighter tomorrow.
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

export default Hardware;
