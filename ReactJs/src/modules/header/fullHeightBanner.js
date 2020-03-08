import React from "react";

import Banner from "./../../Assets/Banner/banner-bg.jpg";

import "./fullHeightBanner.scss";

const FullHeightBanner = () => {
  return (
    <section className="banner">
      <div className="hero-image dark-overlay">
        <img src={Banner} alt="Hero Banner" />
        <div className="hero-text">
          <h1>
            Fashion for
            <br />
            Upcoming Winter
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra elit quis vestibulum hendrerit.
          </p>
          <button>View Collection</button>
        </div>
      </div>
    </section>
  );
};

export default FullHeightBanner;
