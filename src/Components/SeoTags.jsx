import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import twitter_card from "../Assets/Images/twiiter-CARD.jpg";

export default function SeoTags() {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  useEffect(() => {
    if (pathname === "/") {
      setName("Home");
      setTitle("Best Retail POS Software - Capobiz Point of Sale System");
      setUrl("https://capobiz.com/");
      setImg(
        "https://capobiz.com/static/media/header-circle-img.ac1aa3694992374a387e.avif"
      );
      setDescription(
        "CapoBiz Point of Sale (POS) System offers top retail software to streamline sales, inventory, and customer management. Optimize your business with our best POS solutions."
      );
    } else if (pathname === "/about") {
      setName("About");
      setTitle("Affordable POS Software for Small Businesses in Pakistan");
      setUrl("https://capobiz.com/about");
      setImg(
        "https://capobiz.com/static/media/why-choose-pos-software.cbb97a2e2b859e05a5c6.avif"
      );
      setDescription(
        "We provide affordable POS software for small businesses in Pakistan, designed to streamline operations and empower growth with cutting-edge solutions."
      );
    } else if (pathname === "/pos-features") {
      setName("Features");
      setTitle("Features Of Advanced Retail Software - CapoBiz");
      setUrl("https://capobiz.com/pos-features");
      setImg(
        "https://capobiz.com/static/media/pos-custom-features.9c3cfd4f8a3dca08e401.avif"
      );
      setDescription(
        "Explore CapoBiz POS features, designed to enhance retail management. Discover powerful tools for inventory, sales, and customer management."
      );
    } else if (pathname === "/system-hardware") {
      setName("System Hardware");
      setTitle("Compatible POS Hardware - CapoBiz");
      setUrl("https://capobiz.com/system-hardware");
      setImg(
        "https://capobiz.com/static/media/cash-drawers-img.e2b46572c1e09fe3ee92.avif"
      );
      setDescription(
        "Discover the range of hardware devices compatible with CapoBiz POS. From barcode scanners to receipt printers, optimize your retail setup with the best tools."
      );
    } else if (pathname === "/pos-industries") {
      setName("Pos Industries");
      setTitle("Tailored Retail Software Solutions For All - Capobiz");
      setUrl("https://capobiz.com/pos-industries");
      setImg(
        "https://capobiz.com/static/media/retail-shop-pos.50269f381a00f52295a8.avif"
      );
      setDescription(
        "Explore the industries supported by CapoBiz POS. Our versatile retail software is designed for various sectors, from restaurants to retail stores and beyond."
      );
    } else if (pathname === "/help") {
      setName("Help");
      setTitle("Support And Resources For Our Retail Software - CapoBiz");
      setUrl("https://capobiz.com/help");
      setImg(
        "https://capobiz.com/static/media/help-img.e98695db018ac2bee340.avif"
      );
      setDescription(
        "Get assistance with CapoBiz POS. Access our Help Center for FAQs, guides, and expert support to make the most of your retail software."
      );
    } else if (pathname === "/blog") {
      setName("Blog");
      setTitle("CapoBiz POS Blog - Retail Software Insights");
      setUrl("https://capobiz.com/blog");
      setDescription(
        "Explore the CapoBiz POS Blog for the latest tips, trends, and insights on retail software and effective business management."
      );
    } else if (pathname === "/faqs") {
      setName("FAQ'S");
      setTitle("FAQ's For POS Software - CapoBiz");
      setUrl("https://capobiz.com/faqs");
      setDescription(
        "Find answers to common questions about CapoBiz POS. Explore our FAQs for detailed information on our retail software, features, and support."
      );
    } else if (pathname === "/contact") {
      setName("Contact");
      setTitle("Get In Touch With Us - CapoBiz");
      setUrl("https://capobiz.com/contact");
      setDescription(
        "Reach out to CapoBiz POS for support, inquiries, or more information. Our team is ready to assist you with your retail software needs."
      );
    } else if (pathname === "/retail-pos-system") {
      setName("Next-Gen Retail POS");
      setTitle("Best Retail POS System For Your Business - CapoBiz");
      setUrl("https://capobiz.com/retail-pos-system");
      setDescription(
        "Discover CapoBiz Retail POS system, designed to streamline operations, manage inventory, and boost sales for your retail business. Get started today!"
      );
    } else if (pathname === "/best-pos-system-for-restaurant") {
      setName("Restaurant POS");
      setTitle("Best POS System For Restaurant - CapoBiz");
      setUrl("https://capobiz.com/best-pos-system-for-restaurant");
      setDescription(
        "A best POS system for restaurant management serves as the backbone of a successful restaurant business."
      );
    } else {
      setName("Home");
      setTitle("Best Retail Software - Capobiz");
      setUrl(`https://capobiz.com${pathname}`);
      setImg("https://capobiz.com/static/media/default-img.jpg");
      setDescription("This page is not available on CapoBiz.");
    }
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Capobiz POS Software" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitter_card} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobiz.com/",
            "name": "Capobiz",
            "description":  "Capobiz POS software helps manage your business efficiently with cutting-edge features and user-friendly design.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://capobiz.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "queryinput": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>
    </>
  );
}
