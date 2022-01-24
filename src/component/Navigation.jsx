import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-sellanycode.png"
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar, NavDropdown } from 'react-bootstrap';
import '../scss/navbar.scss'
export default function Navigation() {


  const [toggled, setToggled] = useState(false);

  return (

    <>

      <nav className="bg-white navbar navbar-expanded-lg border-bottom">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <button className="btn btn-outline-primary collapse-button" onClick={() => setToggled(!toggled)} ><MenuIcon /></button>
          <div className="items d-flex align-items-center">
            <ul className="main-menu">
              <li className=" menu-item" style={{ position: "relative" }}>
                <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>App & Game Templates</Link>
                <span className="nav-sub-soon" style={{ top: "0px", right: "10px", position: "absolute", textTransform: "uppercase", fontWeight: "700", fontSize: "11px", color: "#6315b8", letterSpacing: 0, opacity: 0.8 }}>(2148)</span>
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
                <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>Scripte & Codes</Link>
                <div className="sub-menu d-flex justify-content-around flex-column">
                  <div className="my-1 mx-1 item">
                    <Link to="/subcat/javaScript" className="text-secondary">javaScript</Link>
                  </div>
                  <div className="my-1 mx-1 item">
                    <Link to="/subcat/php" className="text-secondary">Php</Link>
                  </div>
                  <div className="my-1 mx-1 item">
                    <Link to="/subcat/python" className="text-secondary">Python</Link>
                  </div>
                  <div className="my-1 mx-1 item">
                    <Link to="/subcat/java" className="text-secondary">Java</Link>
                  </div>
                </div>
              </li>
              <li className=" menu-item text-secondary" style={{ position: "relative" }}>

                <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>Upload your code</Link>
                <span className="nav-sub-soon" style={{ top: "0px", right: "10px", position: "absolute", textTransform: "uppercase", fontWeight: "700", fontSize: "11px", color: "#6315b8", letterSpacing: 0, opacity: 0.8 }}>SELL!</span>

              </li>
            </ul>
          </div>

          <div className="connection d-flex align-items-center justify-content-center d-none">
            <Link to="/login" className="text-secondary">
              <button className="btn login-button text-uppercase mx-1">
                Login
              </button>
            </Link>
            <Link to="/signup" className="text-secondary">
              <button className="btn login-button text-uppercase ">
                sign up
              </button>
            </Link>
          </div>

          <div className="dropdown">
            <Link className="btn dropdown-toggle text-secondary" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Hi, Obito <span className="badge bg-primary">$ 0.00</span>
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="far fa-address-card me-2"></i>Dashbaord</Link></li>
              <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-cloud-download-alt me-2"></i>Downloads</Link></li>
              <NavDropdown.Divider />
              <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-th-list me-2"></i>My Items</Link></li>
              <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-cloud-upload-alt me-2"></i>Sell Items</Link></li>
              <NavDropdown.Divider />
              <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-sign-out-alt me-2"></i>Log out</Link></li>

            </ul>
          </div>
        </div>

      </nav >


      <div className={`${!toggled ? 'd-none' : ''} vertical-menu`}>
        <div className="items d-flex align-items-center">
          <ul className="main-menu">
            <li className=" menu-item" style={{ position: "relative" }}>
              <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>App & Game Templates</Link>
              <span className="nav-sub-soon" style={{ top: "0px", right: "10px", position: "absolute", textTransform: "uppercase", fontWeight: "700", fontSize: "11px", color: "#6315b8", letterSpacing: 0, opacity: 0.8 }}>(2148)</span>
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
              <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>Scripte & Codes</Link>
              <div className="sub-menu d-flex justify-content-around flex-column">
                <div className="my-1 mx-1 item">
                  <Link to="/subcat/javaScript" className="text-secondary">javaScript</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/subcat/php" className="text-secondary">Php</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/subcat/python" className="text-secondary">Python</Link>
                </div>
                <div className="my-1 mx-1 item">
                  <Link to="/subcat/java" className="text-secondary">Java</Link>
                </div>
              </div>
            </li>
            <li className=" menu-item text-secondary" style={{ position: "relative" }}>

              <Link to="/category" className="text-secondary" style={{ fontWeight: 300, fontSize: "19px" }}>Upload your code</Link>
              <span className="nav-sub-soon" style={{ top: "0px", right: "10px", position: "absolute", textTransform: "uppercase", fontWeight: "700", fontSize: "11px", color: "#6315b8", letterSpacing: 0, opacity: 0.8 }}>SELL!</span>

            </li>
          </ul>
        </div>

        <div className="connection d-flex align-items-center justify-content-center d-none">
          <Link to="/login" className="text-secondary">
            <button className="btn login-button text-uppercase mx-1">
              Login
            </button>
          </Link>
          <Link to="/signup" className="text-secondary">
            <button className="btn login-button text-uppercase ">
              sign up
            </button>
          </Link>
        </div>

        <div className="dropdown ms-4">
          <Link className="btn dropdown-toggle text-secondary" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Hi, Obito <span className="badge bg-primary">$ 0.00</span>
          </Link>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="far fa-address-card me-2"></i>Dashbaord</Link></li>
            <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-cloud-download-alt me-2"></i>Downloads</Link></li>
            <NavDropdown.Divider />
            <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-th-list me-2"></i>My Items</Link></li>
            <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-cloud-upload-alt me-2"></i>Sell Items</Link></li>
            <NavDropdown.Divider />
            <li><Link className="dropdown-item my-1 text-secondary" to="/"><i className="fas fa-sign-out-alt me-2"></i>Log out</Link></li>

          </ul>
        </div>
      </div>
    </>
  )
}
