import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo-sellanycode.png"


export default function Navbar() {
    return (
        <nav className="navbar navbar-expanded-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                            <Link to="/category">App & Game Templates</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
