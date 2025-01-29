import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import MyContext from '../ContextApi/MyContext'

export default function AllTickets() {
    const { allMessages, ticketMessages } = useContext(MyContext)
    const [allTickets, setAllTickets] = useState([])
    const [ediitTicket, setEdiitTicket] = useState([])
    const [message, setMessage] = useState("")
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
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your ticket deleted successfully",
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
    const updateStatus = async (e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            await fetch(`https://capobiz-backend.vercel.app/api/auth/updateTicket/${ediitTicket._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: ediitTicket.status })
            })
            tickets()
            Swal.fire("Saved!", "", "success");
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }
    }
    const sendMessage = async (e) => {
        e.preventDefault()
        const messageError = document.getElementById("mesageError")
        let hasError;
        if (!message) {
            messageError.innerText = "please enter message"
            hasError = true
        } else {
            messageError.innerText = ""
        }
        if (hasError) {
            return;
        }
        const userId = ediitTicket.userId._id
        const ticketId = ediitTicket._id
        const messageStatus = "Admin Message"
        const res = await fetch("https://capobiz-backend.vercel.app/api/auth/createMessage", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message, userId, ticketId, messageStatus })
        })
        const data = await res.json()
        if (res.ok) {
            // Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Your message send successfully",
            //     showConfirmButton: false,
            //     timer: 1500
            // });
            ticketMessages()
            setMessage("")
            const templateParams = ({
                to_name: ediitTicket.userId.name,
                to_email: ediitTicket.userId.email,
                from_name: "Capobrain",
                message: data.message
            })
            sendEmail(templateParams)
        }
    }
    const sendEmail = (templateParams) => {
        // emailjs.send("service_wbh6u9i", "template_ia99i5d", templateParams, "Hr6iXXlEEhpzr5dMO")
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
                    {allTickets && allTickets.map((ticket) => {
                        return (
                            <tr>
                                <td>{ticket.ticketId}</td>
                                <td>{ticket.severity}</td>
                                <td>{ticket.status}</td>
                                <td>
                                    <i
                                        class="fas fa-edit me-2"
                                        style={{ color: "blue" }}
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticEdit"
                                        onClick={() => editTicket(ticket._id)}
                                    ></i>
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
                                        <label className="form-lable">Status</label>
                                        <select name="status" id="status" value={ediitTicket.status} onChange={(e) =>
                                            setEdiitTicket({
                                                ...ediitTicket,
                                                status: e.target.value
                                            })
                                        } className='form-control'>
                                            <option value="Open">Open</option>
                                            <option value="Close">Close</option>
                                        </select>
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
                                onClick={updateStatus}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*message modal */}
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
                            <p>Generated ticket id is <strong>{ediitTicket.ticketId}</strong></p>
                            <p>Subject of <strong>{ediitTicket.ticketId}</strong> is <strong> :</strong> {ediitTicket.subject}</p>
                            <div className='card'>
                                <button className='btn btnFill w-100 text-end'>User</button>
                                <div className="card-body">
                                    <p> Hello Capobrain Team,</p>
                                    <p>Issue reported from : <strong>{ediitTicket.userId && ediitTicket.userId.name} / {ediitTicket.userId && ediitTicket.userId.email}</strong></p>
                                    <p>{ediitTicket.message}</p>
                                    <p>{convertToPST(ediitTicket.createAt)}</p>
                                </div>
                            </div>
                            <div className='my-3 '>
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
                                <div id="mesageError" className='text-danger'></div>
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
