import React from "react";

import rightIcon from "./../../Assets/Instagram/icon-arrow-right.svg";
import oneInsta from "./../../Assets/Instagram/1.png";
import twoInsta from "./../../Assets/Instagram/2.png";
import threeInsta from "./../../Assets/Instagram/3.png";
import fourInsta from "./../../Assets/Instagram/4.png";
import fiveInsta from "./../../Assets/Instagram/5.png";
import sixInsta from "./../../Assets/Instagram/6.png";
import sevenInsta from "./../../Assets/Instagram/7.png";
import eightInsta from "./../../Assets/Instagram/8.png";
import facebookFollow from "./../../Assets/Instagram/facebook-icon-follow-us.svg";
import twitterFollow from "./../../Assets/Instagram/twitter-icon-follow-us.svg";
import picasaFollow from "./../../Assets/Instagram/picasa-icon-follow-us.svg";
import behanceFollow from "./../../Assets/Instagram/behance-icon-follow-us.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="subscribe-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Subscribe for our Newsletter</h1>
              <p>We won't send any kind of spam</p>
            </div>
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="Email address"
                  aria-describedby="Email address"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="EmailAddress"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 about-us">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet,</li>
                <li>consectetur adipisicing elit, sed do</li>
                <li>eiusmod tempor incididunt ut labore</li>
                <li>dolore magna aliqua</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 newsletter">
              <h5>Newsletter</h5>
              <p>Stay updated with our latest trends</p>
              <ul className="list-unstyled">
                <li>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      aria-label="Email address"
                      aria-describedby="Email address"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="EmailAddress"
                      >
                        <img src={rightIcon} />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 instagram-feed">
              <h5>Instagram Feed</h5>
              <ul className="list-unstyled">
                <li>
                  <img
                    src={oneInsta}
                    alt="Instagram Image Thumbnail One"
                  />
                </li>
                <li>
                  <img
                    src={twoInsta}
                    alt="Instagram Image Thumbnail Two"
                  />
                </li>
                <li>
                  <img
                    src={threeInsta}
                    alt="Instagram Image Thumbnail Three"
                  />
                </li>
                <li>
                  <img
                    src={fourInsta}
                    alt="Instagram Image Thumbnail Four"
                  />
                </li>
                <li>
                  <img
                    src={fiveInsta}
                    alt="Instagram Image Thumbnail Five"
                  />
                </li>
                <li>
                  <img
                    src={sixInsta}
                    alt="Instagram Image Thumbnail Six"
                  />
                </li>
                <li>
                  <img
                    src={sevenInsta}
                    alt="Instagram Image Thumbnail Seven"
                  />
                </li>
                <li>
                  <img
                    src={eightInsta}
                    alt="Instagram Image Thumbnail Eight"
                  />
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 follow-us">
              <h5>Follow us</h5>
              <p>Let us be social</p>
              <ul className="list-unstyled">
                <li>
                  <a href="">
                    <img
                      src={facebookFollow}
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src={twitterFollow}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src={picasaFollow}
                      alt="Picasa"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src={behanceFollow}
                      alt="Behance"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 copyright">
              <p>Copyright &copy;2020</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
