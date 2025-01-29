import React from 'react'

export default function DetailFAQ() {
  return (
    <div>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                FAQs For Our{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                   POS Software
                  </span>{" "}
                </h1>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-bg py-4">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
          <h2 className="subtitle text-center">FAQs</h2>
            <p className='text-center'> Frequently Asked <span>Questions</span> </p>
            <p className='text-center'>
              Below is the lsit of the FAQs for our POS software.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">
               
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq1"
                    className="collapsed question text-start"
                  >
                   What is CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq1"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is a comprehensive point of sale software designed to manage stock/inventory, sales, purchases, accounts, reporting, and much more for businesses of all sizes and types.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq2"
                    className="collapsed question text-start"
                  >
                  Who can use CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq2"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is suitable for any business, including superstores, fertilizer shops, sanitary shops, garments and shoe stores, pharmacies, bakeries, tailor shops, grocery shops, and more.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq3"
                    className="collapsed question text-start"
                  >
                  Is CapoBiz customizable?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq3"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz is highly customizable to meet the specific needs of your business. We can tailor the software to fit your unique requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq4"
                    className="collapsed question text-start"
                  >
                  Is there a support team available?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq4"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Absolutely! We have a dedicated support team available to assist you with any queries or issues you may encounter while using CapoBiz
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq5"
                    className="collapsed question text-start"
                  >
                  Do you offer updates and new features?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq5"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, we regularly update CapoBiz with new features and improvements. All updates are provided free of charge to our existing customers.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq6"
                    className="collapsed question text-start"
                  >
                  What features does CapoBiz offer?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq6"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz offers a wide range of features including stock/inventory management, sales and purchases tracking, comprehensive reporting, customer and supplier management, multi-warehouse and multi-branch support, user access control, and more.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq7"
                    className="collapsed question text-start"
                  >
                  Can CapoBiz manage multiple branches and warehouses?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq7"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz supports multi-branch and multi-warehouse management, allowing you to oversee multiple locations seamlessly.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq8"
                    className="collapsed question text-start"
                  >
                  Does CapoBiz support multi-user access?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq8"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Absolutely! CapoBiz offers multi-user management with user access control, ensuring secure access to the software based on roles and permissions.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq9"
                    className="collapsed question text-start"
                  >
                  How is CapoBiz installed?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq9"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz can be installed on your premises or hosted on the cloud based on your preference and business needs.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq10"
                    className="collapsed question text-start"
                  >
                  Is CapoBiz compatible with my current hardware?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq10"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is designed to be compatible with a wide range of hardware. Please contact our support team for specific compatibility inquiries.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq11"
                    className="collapsed question text-start"
                  >
                  What is the pricing structure for CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq11"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Please contact our sales team or visit our website for detailed pricing information tailored to your business needs.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq12"
                    className="collapsed question text-start"
                  >
                  Are there any hidden charges or ongoing fees?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq12"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    No, there are no hidden charges or ongoing fees. All updates and support are included in the package at no additional cost.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq13"
                    className="collapsed question text-start"
                  >
                  Is my data secure with CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq13"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, we take data security seriously. CapoBiz employs robust security measures to ensure your data is protected and confidential.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq14"
                    className="collapsed question text-start"
                  >
                  Where is my data stored?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq14"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    You have the option to store your data on-premises or in the cloud, depending on your preference and business requirements.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq15"
                    className="collapsed question text-start"
                  >
                  Do you offer training for using CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq15"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, we provide comprehensive training sessions to help you and your team get started with CapoBiz quickly and efficiently.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq16"
                    className="collapsed question text-start"
                  >
                  How long does it take to implement CapoBiz?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq16"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    The implementation time can vary depending on the complexity of your business and customization requirements. Our team will work closely with you to ensure a smooth and timely implementation process.

                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq19"
                    className="collapsed question text-start"
                  >
                    What is CapoBiz and how does it assist businesses in managing their operations?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq19"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is a robust software solution designed to help businesses manage stock/inventory, sales, purchases, production, manufacturing, and more. It offers tools for inventory tracking, sales reporting, order management, and production planning, among other features.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq20"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for businesses in specific industries?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq20"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz is designed to cater to a wide range of industries including retail shops, supermarkets, pharmacies, mobile shops, garment stores, shoe shops, fertilizers industry, tiles industry, and more. Its customizable features make it adaptable to the unique needs of various businesses.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq21"
                    className="collapsed question text-start"
                  >
                    What are the key features of CapoBiz for restaurant management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq21"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz offers restaurant management software designed to streamline operations, manage inventory, track sales, handle reservations, and improve customer service. It includes features such as menu management, table booking, kitchen order management, and billing.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq22"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz offer solutions for real estate management?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq22"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz provides a comprehensive real estate management software solution to streamline property management tasks such as listings management, tenant tracking, lease management, maintenance scheduling, and financial reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq23"
                    className="collapsed question text-start"
                  >
                    How can CapoBiz benefit gyms and fitness centers?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq23"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz gym management software helps fitness centers streamline membership management, class scheduling, trainer scheduling, billing, and attendance tracking. It enables gym owners to efficiently run their operations and enhance member satisfaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq24"
                    className="collapsed question text-start"
                  >
                    Can CapoBiz be customized for tailor shops?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq24"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Absolutely! CapoBiz offers tailor shop management software tailored to the unique needs of tailoring businesses. It includes features for measuring, order management, fabric tracking, invoicing, and customer management..
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq25"
                    className="collapsed question text-start"
                  >
                    Does CapoBiz cater to trading businesses?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq25"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    Yes, CapoBiz offers trading software solutions to manage trading operations efficiently. It includes features for order processing, inventory management, sales analysis, purchase management, and reporting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq26"
                    className="collapsed question text-start"
                  >
                    Is CapoBiz suitable for office management tasks?{" "}
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq26"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                    CapoBiz provides office management software solutions to streamline administrative tasks, enhance productivity, and improve communication within the office environment. It offers features for task management, document sharing, employee scheduling, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}