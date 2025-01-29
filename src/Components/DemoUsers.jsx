import React, { useEffect, useState } from "react";

export default function DemoUsers() {
  const [users, setUsers] = useState([]);

  const demoUsers = async () => {
    const res = await fetch(
      "https://capobiz-backend.vercel.app/api/auth/getDemoUsers",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    demoUsers();
  }, []);

  return (
    <div>
      
      <table
        className="table table-bordered mt-3"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Bussiness Name</th>
            <th>Bussiness Type</th>
            <th>Requirenments</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((User) => {
              return (
                <tr>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                  <td>{User.number}</td>
                  <td>{User.bussinessName}</td>
                  <td>{User.bussinessType}</td>
                  <td>{User.requirenments}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
