import React from "react";
import { useParams, Link } from "react-router-dom";
import features from "../Data/featuresData.json";
import twitter_card from "../Assets/Images/twiiter-CARD.jpg";
import { Helmet } from "react-helmet";

function FeatureDetailPage() {
  const { slug } = useParams();
  const feature = features.find((feature) => feature.slug === slug);
  if (!feature) {
    return <div>Feature not found</div>;
  }
  const { content, meta } = feature;
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords || ""} />
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
        <meta property="og:type" content={meta.openGraph.type} />
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:image" content={twitter_card} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>
      <section className="inner-page-header position-relative">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">{content.heroHeading}</h1>
              </div>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb pb-4">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-success">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/pos-features" className="text-success">Features</Link>
                </li>
                <li className="breadcrumb-item active text-dark" aria-current="page">
                {content.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="container py-4 feature-detail">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <p>{content.detailedDescription}</p>
        <div className="bullet-points-section">
          <h3>Key Features</h3>
          <ul>
            {content.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="image-section text-center py-4">
          <img
            src={content.image}
            alt={content.title}
            title={content.title}
            className="img-fluid rounded"
          />
        </div>
      </section>
    </div>
  );
}

export default FeatureDetailPage;
