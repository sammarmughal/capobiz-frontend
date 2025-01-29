import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function PendingTicket() {
  const [allTickets, setAllTickets] = useState([])
  const user = JSON.parse(sessionStorage.getItem("User"))
  const tickets = async () => {
    const res = await fetch("https://capobiz-backend.vercel.app/api/auth/tickets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    setAllTickets(data)
}
const deleteTicket = async (id) => {
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
                text: "Your Ticket deleted successfully",
                icon: "success",
            });
        }
        return result;
    });
    if (isConfirmed) {
        await fetch(`https://capobiz-backend.vercel.app/api/auth/delTicket/${id}`, {
            method: "DELETE"
        })
        tickets()
    }
}
useEffect(() => {
    tickets()
}, [])
  return (
    <div>
      <table className="table table-bordered" style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>subject</th>
                        <th>Ticket Id</th>
                        <th>Severity</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allTickets && allTickets.filter(ticket => ticket.userId._id===user._id && ticket.status==="Close").reverse().map((ticket) => {
                        return (
                            <tr>
                                <td>{ticket.title}</td>
                                <td>{ticket.subject}</td>
                                <td>{ticket.ticketId}</td>
                                <td>{ticket.severity}</td>
                                <td>{ticket.message}</td>
                                <td>{ticket.status}</td>
                                <td>
                                    <i
                                        className="fas fa-trash me-2"
                                        style={{ color: "blue" }}
                                        onClick={() => deleteTicket(ticket._id)}
                                    ></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    </div>
  )
}
