import React from "react";

import banner from "./../../Assets/Banner/banner-bg.jpg";
import breadcrumbArrow from "./../../Assets/icons/breadcrumb-arrow.svg";

import "./halfBanner.scss";

const HalfBanner = ({ product }) => {
  return (
    <section className="page-head dark-overlay">
      <img
        className="center-vertical-horizontal"
        src={banner}
        alt="Hero Banner"
      />
      <div className="page-head-text">
        <h2 className="page-title">{product.productName}</h2>
        <nav
          className="breadcrumb center-horizontal"
          role="navigation"
          aria-label="breadcrumbs"
        >
          <span title="Home">Home</span>
          <span aria-hidden="true">
            <img src={breadcrumbArrow} alt="breadcrumb arrow" />
          </span>
          <span>{product.category}</span>
          <span aria-hidden="true">
            <img src={breadcrumbArrow} alt="breadcrumb arrow" />
          </span>
          <span>{product.productName}</span>
        </nav>
      </div>
    </section>
  );
};

export default HalfBanner;
