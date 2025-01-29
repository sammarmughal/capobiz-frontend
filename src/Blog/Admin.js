import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Admindata from "./Admindata";
import Swal from "sweetalert2";

export default function Admin() {
  const [password, setPassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmpas: "",
  });

  const modalRef = useRef();

  const changePas = async () => {
    const { email, oldPassword, newPassword, confirmpas } = password
    const pasError = document.getElementById("confirmpas");
    const newError = document.getElementById("newpas");
    const oldError = document.getElementById("oldpas");

    let Error = false;
    if (!oldPassword) {
      oldError.innerText = "Please enter old password";
      Error = true;
    } else {
      oldError.innerText = "";
    }
    if (!newPassword) {
      newError.innerText = "Please enter new password";
      Error = true;
    } else {
      newError.innerText = "";
    }
    if (!confirmpas) {
      pasError.innerText = "Please enter confirm password";
      Error = true;
    } else if (newPassword !== confirmpas) {
      pasError.innerText = "Password does not match";
      Error = true;
    } else {
      pasError.innerText = "";
    }
    if (Error) {
      return;
    }

    const res = await fetch("https://capobiz-backend.vercel.app/api/auth/changepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });
    console.log(res);
    const data = await res.json();
    // console.log(data)
    if (data.error === "Old password incorrect") {
      oldError.innerText = data.error;
    } else if (res.ok) {
      // Request was successful, close the modal using Bootstrap's hide method
      oldError.innerText = "";
      Swal.fire({
        icon: "success",
        title: "Password Changed",
        text: "Your password has been changed successfully!",
      });
    }
    setPassword({
      email: "",
      oldpassword: "",
      newpassword: "",
      confirmpas: "",
    });
  };

  const handlePasChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  return (
    <div className="ps-0">
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Capobiz : Admin Panel
                </h2>

              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid dashboard-content">
        <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
          <div className="d-flex justify-content-end py-3">
            <button
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#static3"
            >
              Change Password
            </button>
            <Link to="/"><button className="btn btn-primary">Log Out</button></Link>
          </div>
          <div className="col-lg-2">
            <div
              className="background-img5"
              style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
            >
              <div
                className="color-overlay5 pb-3 pt-2 outlet"
              >
                <Admindata />
              </div>
            </div>
          </div>

          <div className="col-lg-10 mt-2 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static3"
        ref={modalRef}
        data-bs-backdrop="static3"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <div>
                  <form>
                    <label className="form-lable">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={password.email}
                      onChange={handlePasChange}
                    />
                    <label className="form-lable">Old Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="oldPassword"
                      value={password.oldPassword}
                      onChange={handlePasChange}
                    />
                    <div id="oldpas" className="text-danger"></div>
                    <label className="form-lable">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="newPassword"
                      value={password.newPassword}
                      onChange={handlePasChange}
                    />
                    <div id="newpas" style={{ color: "red" }}></div>
                    <label className="form-lable">Confirm New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmpas"
                      value={password.confirmpas}
                      onChange={handlePasChange}
                    />
                    <div id="confirmpas" style={{ color: "red" }}></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-primary btn1"
                onClick={changePas}
              >
                Change Password
              </button>
              <button
                type="button "
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
