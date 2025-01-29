import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../ContextApi/MyContext";
import SeoTextPage from "../Components/SeoTextPage";
import fetchImage from "../utils/fetchImage";
import { Skeleton } from "@mui/material";

export default function Blog() {
  const { filterPosts, posts, uniqueCategory, setCategory } =
    useContext(MyContext);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const newImages = {};
      for (const post of filterPosts) {
        if (!images[post._id]) {
          const imageUrl = await fetchImage(post.title);
          newImages[post._id] = imageUrl;
        }
      }
      setImages((prevImages) => ({ ...prevImages, ...newImages }));
      setLoading(false);
    };

    fetchImages();
  }, [filterPosts]);

  return (
    <div className="ps-0" style={{ overflowX: "hidden" }}>
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  Capobiz Blog{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Section
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-lg-3">
          <div>
            <div className="pb-3 pt-2 outlet px-lg-0 px-4">
              {loading ? (
                <>
                  <Skeleton animation="wave" height={40} width="100%" />
                  <Skeleton animation="wave" height={40} width="100%" />
                  <Skeleton animation="wave" height={40} width="100%" />
                  <Skeleton animation="wave" height={40} width="100%" />
                </>
              ) : (
                posts &&
                [...uniqueCategory].map((category) => {
                  return (
                    <div className="text-dark px-2" key={category}>
                      <button
                        className="btn btn-outline-success w-100 mt-2 category-button"
                        onClick={() => setCategory(category)}
                      >
                        <div className="d-flex justify-content-start align-items-center">
                          <i className="fas fa-tag me-2 category-icon"></i>
                          <span className="ms-2 category-text">{category}</span>
                        </div>
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="container">
            <p
              className="text-center p-2"
              style={{ backgroundColor: "#ffe5da", display: "inline-block" }}
            >
              <strong> Note </strong>: Get exclusive and in-depth insights in
              the section about the dynamic tech world and retail software in
              both English and Urdu languages at
              <a href="https://urdustem.com/" target="blank" rel="noopener">
                {" "}
                Urdu Stem
              </a>
              .
            </p>
            <div className="row">
              {loading ? (
                <>
                  <div className="col-lg-4 col-md-6 col-12 mt-3 mb-3">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      height={200}
                    />
                    <Skeleton animation="wave" height={40} />
                    <Skeleton animation="wave" height={20} width="80%" />
                    <Skeleton animation="wave" height={20} width="60%" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mt-3 mb-3">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      height={200}
                    />
                    <Skeleton animation="wave" height={40} />
                    <Skeleton animation="wave" height={20} width="80%" />
                    <Skeleton animation="wave" height={20} width="60%" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mt-3 mb-3">
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      height={200}
                    />
                    <Skeleton animation="wave" height={40} />
                    <Skeleton animation="wave" height={20} width="80%" />
                    <Skeleton animation="wave" height={20} width="60%" />
                  </div>
                </>
              ) : (
                filterPosts.map((post) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-3 mb-3"
                    key={post._id}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/blog/${post.slug}`}
                    >
                      <div className="card text-center h-100 blog-card">
                        <div className="card-header text-dark blog-card-header">
                          Blog
                        </div>
                        <div className="card-body blog-card-body">
                          {images[post._id] && (
                            <img
                              src={images[post._id]}
                              alt={post.title}
                              title={post.title}
                              loading="lazy"
                              className="img-fluid mb-3 blog-card-image"
                              width="300" // Specify the width
                              height="200" // Specify the height
                            />
                          )}
                          <h5 className="card-title text-dark blog-card-title">
                            {post.title && post.title.length > 45
                              ? post.title.slice(0, 45) + "..."
                              : post.title}
                          </h5>
                          <p className="card-text blog-card-text">
                            {post.excerpt && post.excerpt.length > 100
                              ? post.excerpt.slice(0, 100) + "..."
                              : post.excerpt}
                          </p>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="btn blog-card-button"
                            data-mdb-ripple-init
                          >
                            Read More
                          </Link>
                        </div>
                        {/* <div className="card-footer text-muted">
                          Published on{" "}
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString()
                            : "Unknown date"}
                        </div> */}
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <SeoTextPage />
    </div>
  );
}
