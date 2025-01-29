import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export default function TicketGenerate() {
    const user = JSON.parse(sessionStorage.getItem("User"))
    const [ticket, setTicket] = useState({
        title: "",
        subject: "",
        message: "",
        severity: ""
    })
    const generateTicket = async (e) => {
        e.preventDefault()
        const titleError = document.getElementById("titleError")
        const severityError = document.getElementById("severityError")
        const subjectError = document.getElementById("subjectError")
        const messageError = document.getElementById("messageError")
        const { title, subject, message, severity } = ticket
        let Error = false;
        if (!title) {
            titleError.innerText = "Add Title"
            Error = true
        } else {
            titleError.innerText = ""
        }
        if (!subject) {
            subjectError.innerText = "Add Subject"
            Error = true
        } else {
            subjectError.innerText = ""
        }
        if (!message) {
            messageError.innerText = "Add Message"
            Error = true
        } else {
            messageError.innerText = ""
        }
        if (!severity) {
            severityError.innerText = "Add Severity"
            Error = true
        } else {
            severityError.innerText = ""
        }
        if (Error) {
            return;
        }
        const userId = user._id
        const res = await fetch("https://capobiz-backend.vercel.app/api/auth/support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, subject, message, severity, userId })
        })
        const data = await res.json()
        if (res.ok) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your ticket generated successfully",
                showConfirmButton: false,
                timer: 1500
            });

            setTicket({
                title: "",
                subject: "",
                message: "",
                severity: ""
            })
            const templateParams = ({
                to_name: user.name,
                to_email: user.email,
                from_name: "Capobiz",
                ticket_id: data.ticket.ticketId
            })
            sendEmail(templateParams)
        }
    }

    const onchange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value })
    }

    const sendEmail = (templateParams) => {
        emailjs.send("service_wbh6u9i", "template_ip0yw0q", templateParams, "Hr6iXXlEEhpzr5dMO")
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-md-6">
                        <form onSubmit={generateTicket}>
                            <input type="text" name='title' value={ticket.title} onChange={onchange} placeholder='Title' className='form-control' />
                            <div className="text-danger" id='titleError'></div>
                            <input type="text" name='subject' value={ticket.subject} onChange={onchange} placeholder='Subject' className='form-control mt-3' />
                            <div className="text-danger" id='subjectError'></div>
                            <select name="severity" id="severity" value={ticket.severity} onChange={onchange} className='form-control mt-3'>
                                <option value="">Select Severity</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                            <div className="text-danger" id='severityError'></div>
                            <textarea name="message" value={ticket.message} onChange={onchange} id="message" className='form-control mt-3' rows={7}></textarea>
                            <div className="text-danger" id='messageError'></div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className='btn btnFill' type='submit'><i className='fas fa-arrow-right me-2 text-white moveIcon'></i> Send Ticket</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>Problem Solution</h1>
                                <p>Please provide a brief description of the issue you are experiencing. Be as detailed as possible to help us better understand and address your concern. Include any error messages, symptoms, or specific scenarios where the problem occurs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
