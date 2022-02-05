import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Transparent-02.png";
import "../scss/logincard.scss";

export default function ResetPassword() {
  return (
    <div className="container logincard">
      <div className="row justify-content-md-center h-100">
        <div className="mt-5 card-wrapper d-flex flex-column">
          <Link to="/Home" className="logo mx-auto" >
            <img className="logo" align="center" src={logo} alt="Logo" />
          </Link>
        
        <div className="card shadow p-3 mb-5 bg-body rounded ">
          <div className="card-body  ">
            <h4 className="text-center"> Forgot Password </h4>
            <form>
              <div className="mb-3 " >
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="form-text text-muted" style={{fontSize: "15px"}}> By clicking "Reset Password" you will get reset link.</div>
              </div>
              <div className="mb-3">
                  <Link to="/resetpasswordconfirm">
                <button type="submit" className="btn btn-primary w-100">
                Reset Password
              </button> 
              </Link> 
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    
    
    </div>
  );
}
