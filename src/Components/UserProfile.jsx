import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserNavbar from './UserNavbar'

export default function UserProfile() {
    return (
        <div>
            <UserNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 ps-3 bg-white shadow profileLink py-3">
                        <Link to="ticket-generate" className="up-sidebar-link">  <h5 className='text-dark'><i className="me-2 fas fa-plus-square"></i> Generate Ticket</h5> </Link>
                        <Link to="generated-tickets" className="up-sidebar-link"> <h5 className='text-dark'><i className="me-2 fas fa-arrow-right"></i> Generated Tickets</h5> </Link>
                        <Link to="open-status-tickets" className="up-sidebar-link">  <h5 className='text-dark'><i className="me-2 fas fa-arrow-right"></i> OpenStatus Tickets</h5> </Link>
                        <Link to="close-status-tickets" className="up-sidebar-link">  <h5 className='text-dark'><i className="me-2 fas fa-arrow-right"></i> CloseStatus Tickets</h5> </Link>
                        {/* <Link to="messages"> <h5 className='text-dark'><i class="fas fa-plus-square"></i> Messages</h5> </Link> */}
                    </div>
                    <div className="col-md-9 py-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}
