import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";
import twitter_card from "../Assets/Images/twiiter-CARD.jpg";
import { Skeleton } from "@mui/material";

export default function Blogcat() {
  const { postSlug } = useParams();
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const postData = async () => {
      await fetch(
        `https://capobiz-backend.vercel.app/api/auth/getpost/${postSlug}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });
    };
    postData();
  }, [postSlug]);
  const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content={posts.title} />
        <meta property="og:description" content={posts.meta} />
        <meta property="og:url" content={`https://capobiz.com/${posts.slug}`} />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Capobiz" />
        <meta name="twitter:title" content={posts.title} />
        <meta name="twitter:description" content={posts.meta} />
        <meta name="twitter:image" content={twitter_card} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobiz.com/${posts.slug}" ,
            "name": "Capobiz",
            "description": " ${posts.meta} " ,
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
              "query-input": "rqeuired name=search_term_string"
            }
          }
        `}</script>
        <link rel="canonical" href={`https://capobiz.com/${posts.slug}`} />
        <meta name="description" content={posts.meta} />
      </Helmet>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  {loading ? (
                    <Skeleton animation="wave" width="50%" />
                  ) : (
                    posts.title
                  )}
                </h1>
              </div>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb pb-4">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-success">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog" className="text-success">
                    Blog
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-dark"
                  aria-current="page"
                >
                  {posts.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div className="container blog-container">
        {loading ? (
          <>
            <div className="mt-5">
              <Skeleton animation="wave" height={24} />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
            </div>
            <div className="mt-5">
              <Skeleton animation="wave" height={40} />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
            </div>
            <div className="mt-5">
              <Skeleton animation="wave" height={40} />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
            </div>
            <div className="mt-5">
              <Skeleton animation="wave" height={40} />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
              <Skeleton animation="wave" height={24} width="80%" />
              <Skeleton animation="wave" height={24} width="60%" />
            </div>
          </>
        ) : (
          <div
            className="mt-5"
            dangerouslySetInnerHTML={sanitizedContent}
          ></div>
        )}
      </div>
    </div>
  );
}
