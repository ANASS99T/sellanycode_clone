import React from "react";
import { Link } from "react-router-dom";
import "../scss/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container Footercard">
        <div className="row">
          <div className="medium-gap large-9 large-push-3 columns ">
            <div className="row show-for-medium-up">
              <div className="large-12 columns">
                <ul className="categories gap inline-list links text-large">
                  <li className="show-for-large-up">
                    <Link to="/apgmbiblio">
                      <span>All Apps</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/apgmbiblio">
                      <span>Unity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/apgmbiblio">
                      <span>iOS</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/apgmbiblio">
                      <span>Android</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/scriptcode">
                      <span>Scripts & Code</span>
                    </Link>
                  </li>
                  <li>
                    <span className="info_3c6Q-" style={{ color: "#5db55d" }}>
                      <i
                        className="fas fa-lock"
                        style={{ paddingRight: "20px", paddinLeft: "20px" }}
                      />
                      256-bit encryption
                    </span>
                  </li>
                  <li style={{ float: "right" }}>
                    <a href="mailto: info@sellanycode.com">
                      <span>Contact us</span>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="small-gap medium-4 columns">
                <h4 className="beta">Navigation</h4>
                <ul className="links responsive">
                  <li>
                    <Link to="/apgmbiblio">
                      <span>App & Game Templates</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/scriptcode">
                      <span>Scripts & Code</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/themes">
                      <span>Themes</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/plugins">
                      <span>Plugins</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/graphics">
                      <span>Graphics</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="small-gap medium-4 columns">
                <h4 className="beta">How it works</h4>
                <ul className="links responsive">
                  <li>
                    <Link to="/build-an-app">Build a Mobile App</Link>
                  </li>
                  <li>
                    <Link to="/sell-buy-ios-apps">Create iOS Apps</Link>
                  </li>
                  <li>
                    <Link to="/sell-buy-android-apps">Create Android Apps</Link>
                  </li>
                  <li>
                    <Link to="/sell-your-work">Sell App Source Code</Link>
                  </li>
                  <li>
                    <Link to="/sell-your-code">Sell Your Source Code</Link>
                  </li>
                  <li>
                    <a href="mailto: info@sellanycode.com">Help / Support</a>
                  </li>
                </ul>
              </div>
              <div className="small-gap medium-4 columns">
                <h4 className="beta">About us</h4>
                <ul className="links responsive">
                  <li>
                    <Link to="/about">About SellAnyCode</Link>
                  </li>
                  <li>
                    <Link to="/developer-terms-conditions">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/money-back-guarantee">100% Guarantee</Link>
                  </li>
                  <li>
                    <Link to="/dmca">DMCA</Link>
                  </li>
                  <li style={{ display: "none" }}>
                    <Link to="https://www.sellanycode.com/sellmyapp-nulled">
                      SellMyApp Nulled
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="large-3 large-pull-9 columns">
            <div id="floating-box-wrapper">
              <h4 className="beta show-for-medium-down">Social</h4>
              <ul id="footer-social">
                <li>
                  <a
                    className="button dark full-width d-flex align-items-center justify-content-start"
                    href="https://www.facebook.com/sellanycode/"
                    target=" _blank"
                  >
                    <i
                      className="fab fa-facebook-f"
                      style={{ fontSize: "40px", marginRight: "20px" }}
                    />
                    <div>
                      <strong style={{ fontSize: "19px" }}>Like us</strong>
                      <br />
                      <small id="facebook-likes-counter">1.953 Likes</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="button dark full-width d-flex align-items-center justify-content-start"
                    href="https://twitter.com/sellanycode"
                    target=" _blank"
                  >
                    <i
                      className="fab fa-twitter"
                      style={{ fontSize: "40px", marginRight: "20px" }}
                    />
                    <div>
                      <strong>Follow us</strong>
                      <br />
                      <small id="twitter-followers-counter">
                        593 Followers
                      </small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="button dark full-width d-flex align-items-center justify-content-start"
                    href="https://www.linkedin.com/company/sellanycode-com"
                    target=" _blank"
                  >
                    <i
                      className="fab fa-linkedin-in"
                      style={{ fontSize: "40px", marginRight: "20px" }}
                    />
                    <div>
                      <strong>Reach us</strong>
                      <br />
                      <small id="twitter-followers-counter">
                        LinkedIn Profile
                      </small>{" "}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
