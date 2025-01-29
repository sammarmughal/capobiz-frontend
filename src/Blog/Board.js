import React, { useEffect, useState } from "react";

export default function Board() {
const [posts, setPosts] = useState(0)
const [category, setCategory] = useState(0)

  const postNumbers = async()=>{
await fetch("https://capobiz-backend.vercel.app/api/auth/postsCount", {
  method: "GET",
  headers:{
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => setPosts(data))
  }

  const categoryNumbers = async()=>{
await fetch("https://capobiz-backend.vercel.app/api/auth/categoryCount", {
  method: "GET",
  headers:{
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => setCategory(data))
  }

useEffect(()=>{
  postNumbers()
  categoryNumbers()
},[])


  return (
    <div>
      
      <h2 className="pt-5 pb-3 text-center">Categories & Blogs</h2>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
              <i className="fa-solid fa-tag fa-2x me-2"></i>
                <h3 className="card-title">Categories</h3>
                </div>
                <h3 className="text-center">{category}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
              <i className="fa-solid fa-blog fa-2x me-2"></i>
                <h3 className="card-title text-center">Blogs</h3>
                </div>
                <h3 className="text-center">{posts}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
