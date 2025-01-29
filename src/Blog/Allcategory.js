import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Allcategory() {
  const [category, setCategory] = useState([]);
  const [seeCategory, setSeeCategory] = useState([]);
  const [seCategory, setSeCategory] = useState("");
  const [editId, setEditId] = useState([]);

  const Getcategory = async () => {
    await fetch("https://capobiz-backend.vercel.app/api/auth/getcategory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    Getcategory();
  }, []);

  const viewCategory = async (id) => {
    await fetch(`https://capobiz-backend.vercel.app/api/auth/getcategory/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSeeCategory(data));
  };

  const deleteCategory = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      return result;
    });

    if (isConfirmed) {
      await fetch(`https://capobiz-backend.vercel.app/api/auth/delcategory/${id}`, {
        method: "DELETE",
      });
    }
    Getcategory();
  };

  const editCategory = async (id) => {
    await fetch(`https://capobiz-backend.vercel.app/api/auth/getcategory/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSeCategory(data);
        setEditId(data._id);
      });
  };

  const updateCategory = async () => {
    await fetch(`https://capobiz-backend.vercel.app/api/auth/editcategory/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: seCategory }),
    });
    Getcategory();
  };

  return (
    <div>

      <h2 className="pt-5 text-center pb-2">Categories List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {category &&
            category.slice().reverse().map((post) => {
              return (
                <tr>
                  <td>{post.category}</td>
                  <td>
                    <i
                      class="fa-solid fa-eye me-3"
                      style={{ color: "blue" }}
                      data-bs-toggle="modal"
                      data-bs-target="#static"
                      onClick={() => viewCategory(post._id)}
                    ></i>
                    <i
                      class="fas fa-edit me-3"
                      style={{ color: "blue" }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticEdit"
                      onClick={() => editCategory(post._id)}
                    ></i>
                    <i
                      class="fas fa-trash"
                      style={{ color: "blue" }}
                      onClick={() => deleteCategory(post._id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* View Modal */}
      <div
        className="modal fade"
        id="static"
        data-bs-backdrop="static"
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
                    <label className="form-lable">Category</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={seeCategory.category}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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
      {/* Edit Modal */}
      <div
        className="modal fade"
        id="staticEdit"
        data-bs-backdrop="static"
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
                    <label className="form-lable">Category</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={seCategory.category}
                      onChange={(e) => setSeCategory(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
                onClick={updateCategory}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
