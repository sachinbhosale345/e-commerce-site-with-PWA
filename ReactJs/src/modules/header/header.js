import React from "react";
import { useHistory } from "react-router-dom";

import logo from "./../../Assets/logo.png";
import searchIcon from "./../../Assets/icons/search.svg";
import userIcon from "./../../Assets/icons/users.svg";
import heartIcon from "./../../Assets/icons/heart-regular.svg";
import cartIcon from "./../../Assets/icons/cart.svg";

import "./header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <header>
      <div className="top-navbar float-left w-100">
        <div className="container">
          <div className="left-side">
            <ul>
              <li>
                Call Us: <span>012 44 5698 7456 896</span>
              </li>
            </ul>
          </div>
          <div className="right-side">
            <ul>
              <li>
                <a href="">Login/Register</a>
              </li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-navbar float-left w-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="#"
              onClick={() => history.push("/")}
            >
              <img src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto center-horizontal">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              {/*Start Leftside Main navigation*/}
              <ul className="main-leftside-actions">
                <li>
                  <a href="" className="">
                    <img src={searchIcon} />
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <img src={userIcon} />
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <img src={heartIcon} />
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <img src={cartIcon} />
                  </a>
                </li>
              </ul>
              {/*Start Leftside Main navigation*/}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
