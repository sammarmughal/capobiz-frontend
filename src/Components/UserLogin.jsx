import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        const res = await fetch("https://capobiz-backend.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await res.json();
        const both = document.getElementById("number");
        both.innerText = json.error;
        if (res.ok) {
            sessionStorage.setItem("User", JSON.stringify(json));
            if (json.email === "info@capobiz.com") {
                navigate("/adminPanel");
            } else {
                navigate("/user-profile");
            }
        }
    };
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <section className="inner-page-header">
                <div className="inner-page-overlay">
                    <div className="container">
                        <div className="row slider d-flex justify-content-center py-7 align-items-center">
                            <div className="col-md-12 text-center content-col">
                                <h2 className="slider-heading">
                                    Sign {" "}
                                    <span style={{ color: "var(--secondary-color)" }}>
                                        In
                                    </span>{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="login-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 py-5">
            <form onSubmit={handlesubmit} className="login-form">
              <div id="number" className="text-danger text-center"></div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={credentials.email}
                  onChange={onchange}
                  id="email"
                />
                <div className="email" style={{ color: 'red' }} id="mail"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={credentials.password}
                  onChange={onchange}
                  id="password"
                />
                <div className="phone no" style={{ color: 'red' }} id="pass"></div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mb-2 mt-4 px-4">
                  <i className="fas fa-arrow-right me-2 moveIcon text-white"></i>
                  Log In
                </button>
              </div>
            </form>
            <h6 className="text-center formButton mt-4">
              Don't Have An Account? <Link to="/userSignup">SignUp</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}