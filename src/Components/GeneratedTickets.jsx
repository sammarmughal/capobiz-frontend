import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import MyContext from '../ContextApi/MyContext'

export default function GeneratedTickets() {
    const { allMessages, ticketMessages } = useContext(MyContext)
    const [message, setMessage] = useState("")
    const [allTickets, setAllTickets] = useState([])
    const [ediitTicket, setEdiitTicket] = useState([])
    const user = JSON.parse(sessionStorage.getItem("User"))
    const convertToPST = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', { timeZone: 'Asia/Karachi', timeZoneName: 'short' });
    };
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
    useEffect(() => {
        tickets()
        ticketMessages()
    }, [])
    const deleteTicket = async (id) => {
        const { isConfirmed } = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this!",
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
    const editTicket = async (id) => {
        const res = await fetch(`https://capobiz-backend.vercel.app/api/auth/getTicket/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setEdiitTicket(data)
    }
    const sendMessage = async (e) => {
        e.preventDefault()

        const userId = ediitTicket.userId._id
        const ticketId = ediitTicket._id
        const status = "User Message"
        const res = await fetch("https://capobiz-backend.vercel.app/api/auth/createMessage", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message, userId, ticketId, status })
        })

        if (res.ok) {
            ticketMessages()
            setMessage("")
        }
    }
    return (
        <div>
            <table className="table table-bordered" style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th>Ticket Id</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allTickets && allTickets.filter(ticket => ticket.userId._id === user._id).reverse().map((ticket) => {
                        return (
                            <tr>
                                <td>{ticket.ticketId}</td>
                                <td>{ticket.severity}</td>
                                <td>{ticket.status}</td>
                                <td>
                                    <i
                                        className="fas fa-trash me-2"
                                        style={{ color: "blue" }}
                                        onClick={() => deleteTicket(ticket._id)}
                                    ></i>
                                    <i
                                        className="fas fa-comment-medical"
                                        style={{ color: "blue" }}
                                        data-bs-toggle="modal"
                                        data-bs-target="#static"
                                        onClick={() => editTicket(ticket._id)}
                                    ></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* modal */}
            <div
                className="modal fade"
                id="static"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">
                                Conversation Modal
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body userMessageModal">
                            <p>Your generated ticket id is <strong>{ediitTicket.ticketId}</strong></p>
                            <p>Your subject of <strong>{ediitTicket.ticketId}</strong> is <strong> :</strong> {ediitTicket.subject}</p>
                            <p>Your issue of <strong>{ediitTicket.ticketId}</strong> is {ediitTicket.message}</p>
                            <div className='my-5 '>
                                {allMessages && allMessages.filter(message => message.ticketId && message.ticketId.ticketId === ediitTicket.ticketId).map((message) => {
                                    return <div key={message._id} className='card mt-3'>
                                        <button className={`${message.messageStatus === "Admin Message" ? "btnOwner w-100 text-end" : "btnFill w-100 text-end"}`}>{message.messageStatus === "Admin Message" ? "Owner" : "User"}</button>
                                        <div className="card-body">
                                            <p>{message.message}</p>
                                            <p>{convertToPST(message.createAt)}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <form onSubmit={sendMessage}>
                                <textarea name="message" id="message" rows={12} className='form-control mt-3' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btnFill mt-3' type='submit'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
