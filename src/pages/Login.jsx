import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-sellanycode-light.png";
import "../scss/logincard.scss";

export default function Login() {
  return (
    <div className="container logincard">
      <div className="row justify-content-md-center h-100">
        <div className="mt-5 card-wrapper ">
          <Link to="/Home" className="logo mx-auto" >
            <img className="logo" align="center" src={logo} alt="Logo" />
          </Link>
        
        <div className="card shadow p-3 mb-5 bg-body rounded ">
          <div className="card-body  ">
            <h4 className="text-center"> Welcome back!</h4>
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
              </div>
              <div className="">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 float-end" style={{marginbottom:"5px"}}>
              <Link to="/" align="right"> Forget Password
                </Link>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>  
              </div>
              
              <div className="mb-3" style={{marginTop:"2px"}} align="center">
                 Don't have an account?
                 <Link to="/register"> Sign Up </Link>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    
    
    </div>
  );
}
