import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function UserSignup() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [credentials, setCedentials] = useState({
    name: "",
    email: "",
    bussinessName: "",
    number: "",
    bussinessType: "",
    requirenments: "",
  });
  const Signup = async (e) => {
    e.preventDefault();
    const { name, email, bussinessName, number, bussinessType, requirenments } = credentials;
    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const contact = document.getElementById("number");
    let Error = false;
    if (!name) {
      nameI.innerText = "Please enter name";
      Error = true;
    } else {
      nameI.innerText = "";
    }
    if (!email) {
      emailI.innerText = "Please enter email";
      Error = true;
    } else {
      emailI.innerText = "";
    }
    if (!number) {
      contact.innerText = "Enter Contact Number";
      Error = true;
    } else {
      contact.innerText = "";
    }
    if (Error) {
      return;
    }
    const res = await fetch(
      "http://localhost:8002/api/auth/addDemoUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, bussinessName, number, bussinessType, requirenments }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      navigate("/pos-demo");
    }
    sessionStorage.setItem("signUser", JSON.stringify(data.user));
    emailjs.sendForm(
      "service_pj93zyr",
      "template_i20j2uo",
      formRef.current,
      "2IXZCnlGYrCJooOAK"
    );

    setCedentials({
      name: "",
      email: "",
      schoolName: "",
    });
  };

  const onchange = (e) => {
    setCedentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container py-3 mt-lg-0 mt-5">
        <h2 className="text-center">Hang On A Minute!</h2>
        <p className="text-center">
          You're almost there, just fill in this information to get the
          credentials for the demo.
        </p>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form onSubmit={Signup} ref={formRef}>
              <input
                className="form-control"
                type="text"
                name="name"
                value={credentials.name}
                onChange={onchange}
                placeholder="Your Name"
              />
              <div id="nameI" style={{ color: "red" }}></div>
              <input
                className="form-control mt-4"
                type="email"
                name="email"
                value={credentials.email}
                onChange={onchange}
                placeholder="Your Email"
              />
              <div id="emailI" style={{ color: "red" }}></div>
              <input
                className="form-control mt-4"
                type="name"
                name="bussinessName"
                value={credentials.bussinessName}
                onChange={onchange}
                placeholder="Bussiness Name"
              />
              <div id="emailI" style={{ color: "red" }}></div>
              <input
                className="form-control mt-4"
                type="number"
                name="number"
                value={credentials.number}
                onChange={onchange}
                placeholder="Contact Number"
              />
              <div id="number" style={{ color: "red" }}></div>
              <input
                className="form-control mt-4"
                type="name"
                name="bussinessType"
                value={credentials.bussinessType}
                onChange={onchange}
                placeholder="Bussiness Type"
              />
              <div id="emailI" style={{ color: "red" }}></div>
              <textarea
                rows={7}
                className="form-control mt-4"
                type="name"
                name="requirenments"
                value={credentials.requirenments}
                onChange={onchange}
                placeholder=" Any specific requirements"
              />
              <div className="text-start d-flex justify-content-center mt-5">
                <button className="site-buttons" type="submit">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
