import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-sellanycode.png"
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  return (


    <nav className="bg-white navbar navbar-expanded-lg border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="items d-flex align-items-center">
          <ul className="main-menu">
            <li className=" menu-item" style={{ position: "relative" }}>
              <Link to="/category" className="text-secondary" style={{ lineHeight: "79px", fontWeight: 300, fontSize: "19px" }}>App & Game Templates</Link>
              <span className="nav-sub-soon" style={{ top: "13px", right: "10px", position: "absolute", textTransform: "uppercase", fontWeight: "700", fontSize: "11px", color: "#6315b8", letterSpacing: 0, opacity: 0.8 }}>(2148)</span>
              <div className="sub-menu d-flex justify-content-around flex-column">
                <div className="my-1 mx-1 item">
                  <Link to="/category/ios" className="text-secondary">iOS</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/category/android" className="text-secondary">Android</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/category/unity" className="text-secondary">Unity</Link>
                </div>
              </div>
            </li>
            <li className=" menu-item" style={{ position: "relative" }}>
              <Link to="/category" className="text-secondary" style={{ lineHeight: "79px", fontWeight: 300, fontSize: "19px" }}>Scripte & Codes</Link>
              <div className="sub-menu d-flex justify-content-around flex-column">
                <div className="my-1 mx-1 item">
                  <Link to="/category/ios" className="text-secondary">iOS</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/category/android" className="text-secondary">Android</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/category/unity" className="text-secondary">Unity</Link>
                </div>
              </div>
            </li>
            <li className=" menu-item text-secondary" style={{ lineHeight: "79px", fontWeight: 300, fontSize: "19px" }}>

              <Link to="/category" className="text-secondary" style={{ lineHeight: "79px", fontWeight: 300, fontSize: "19px" }}>Upload your code</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}
