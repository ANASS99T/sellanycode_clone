import React from "react";
import background from "../assets/img/sellanycode-background.jpg";
import logos from "../assets/img/icons-sellanycode.png";
import product1 from "../assets/img/Products/FullHolyQuranandAzkarAlMuslimReminder_sellanycode_featured_image_1643044311.png";
import product2 from "../assets/img/Products/AnimatedSidebarMenuUsingHTMLampCSSampJavaScriptResponsiveDashboardSideNavigationBar_sellanycode_featured_image_1643004869.jpg";
import product3 from "../assets/img/Products/RealTrafficCarDriverRacinggame2020_sellanycode_featured_image_1642986683.png";
import product4 from "../assets/img/Products/ForzaHorizon5CarRacing_sellanycode_featured_image_1642985795.png";

import "../scss/home.scss";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="home-page">
      <div
        className="hp-hero"
        style={{ backgroundImage: `url(${background})`, height: "485px" }}
      >
        <div className="content container ">
          <h1 className="title mb-5">
            Marketplace with Source Codes and App & Game Templates
          </h1>

          <div className="input-group mb-5 searchBar">
            <input
              type="text"
              className="form-control"
              placeholder="Start searching in 2149 codes..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-light" style={{background: "white"}}             
               type="button"
              id="button-addon2"
            >
                <i className="fas fa-search" style={{fontSize:"30px"}}></i>
            </button>
          </div>
          <div className="img-logo">
              <Link to="/">
                 <img className="" src={logos} alt="" />
              </Link>
          </div>
        </div>
      </div>
      <div className="container cards" style={{marginTop:"35px"}}>
          <div className="wrapper mb-3 mt-3 d-flex flex-row" style={{position: "relative" }}>
              <span className="font-weight-bold h4 m-t-sm" style={{fontSize:"27px",position:"relative",left:"-6px"}}> New Added Items</span>
              <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button">                    
                    <i className="fas fa-eye " style={{ marginRight:"20px" }}></i>    
                     View All
              </button>  
              </div>
              </Link>          
          </div>
          <div className="row rowgames">
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $5</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $15</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $20</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>
      <div className="container cards" style={{marginTop:"35px"}}>
          <div className="wrapper mb-3 mt-3 d-flex flex-row" style={{position: "relative" }}>
              <span className="font-weight-bold h4 m-t-sm" style={{fontSize:"27px",position:"relative",left:"-6px"}}>Top Selling Items</span>
              <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button">                    
                    <i className="fas fa-eye " style={{ marginRight:"20px" }}></i>    
                     View All
              </button>  
              </div>
              </Link>          
          </div>
          <div className="row rowgames">
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $5</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $15</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $20</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>
      <div className="container cards" style={{marginTop:"35px"}}>
          <div className="wrapper mb-3 mt-3 d-flex flex-row" style={{position: "relative" }}>
              <span className="font-weight-bold h4 m-t-sm" style={{fontSize:"27px",position:"relative",left:"-6px"}}> Special Items</span>
              <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button">                    
                    <i className="fas fa-eye " style={{ marginRight:"20px" }}></i>    
                     View All
              </button>  
              </div>
              </Link>          
          </div>
          <div className="row rowgames">
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $5</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $15</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $20</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>
      <div className="container cards" style={{marginTop:"35px"}}>
          <div className="wrapper mb-3 mt-3 d-flex flex-row" style={{position: "relative" }}>
              <span className="font-weight-bold h4 m-t-sm" style={{fontSize:"27px",position:"relative",left:"-6px"}}> Hot Items</span>
              <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button">                    
                    <i className="fas fa-eye " style={{ marginRight:"20px" }}></i>    
                     View All
              </button>  
              </div>
              </Link>          
          </div>
          <div className="row rowgames">
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $5</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $15</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $20</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>
      <div className="container cards" style={{marginTop:"35px"}}>
          <div className="wrapper mb-3 mt-3 d-flex flex-row" style={{position: "relative" }}>
              <span className="font-weight-bold h4 m-t-sm" style={{fontSize:"27px",position:"relative",left:"-6px"}}> Popular Items</span>
              <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button">                    
                    <i className="fas fa-eye " style={{ marginRight:"20px" }}></i>    
                     View All
              </button>  
              </div>
              </Link>          
          </div>
          <div className="row rowgames">
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $30</button>
                          <img className="card-img-top" src={product1}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Full Holy Quran and Azkar Al Muslim Reminder
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $5</button>
                          <img className="card-img-top" src={product2}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Animated Sidebar Menu Using HTML & CSS & JavaScript | Responsive Dashboard Side Navigation Bar
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $15</button>
                          <img className="card-img-top" src={product3}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Real Traffic Car Driver Racing Game
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
              <div className="col-sm-3 mb-4">
                  <div className="card box-shadow h-100">
                      <Link to="/">
                      <div className="relativel">
                          <button className="btn btn-primary btn-sm float-right font-weight-bold buttonprice"> $20</button>
                          <img className="card-img-top" src={product4}></img>
                      </div>
                      <div className="card-body text-center">
                          <h5 className="card-title text-truncate text-secondary mb-3">
                          Forza Horizon 5 - Car Racing
                          </h5>
                      </div>
                      </Link>
                  </div>
              </div>
          </div>

      </div>
      <section style={{border:"none",marginTop:"30px",marginBottom:"20px",borderTop:"1px solid #e7e7e7"}}>
       <div className="row">
       <div className="large-12 columns align-center text-center gap-half" style={{marginBottom:"30px !important", marginTop:"40px"}}>
           <h3 className="gap-half" style={{fontSize:"27px"}}>
           Start Selling Your Source Code. Enjoy
           <strong> 80% </strong>
           Revenue Share And 
           <strong> 90% </strong>
           For Exclusive Items! 
           </h3> 
           <Link to="/">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button cta large extrawide tall " style={{ borderRadius: "5px",marginRight:"20px" }}>                       
                    Find out more
              </button>  
              </div>
            </Link> 
       </div>
      
       </div>
      </section>
    </div>
  );
}
