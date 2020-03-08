import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGem } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

import HalfBanner from "./../header/halfBanner";
import { toggleLike } from "./../../actions";

import "./product.scss";

const ProductDetail = props => {
  const [product, setProduct] = useState({});
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const productId = props.match.params.id;
    const product = props.products.find(p => p.id === parseInt(productId));
    if (!product) {
      props.history.push("/");
      return;
    }
    setProduct(product);
  });

  return (
    <div className="productDetails-page">
      <HalfBanner product={product} />
      <section id="product-detail">
        <div className="container pl-xl-0 pr-xl-0">
          <div className="row product_details">
            <div className="col-lg-5">
              <div className="product_slider_img">
                <div className="slideOuter">
                  <div className="slideWrapper">
                    <div id="vertical" className="lightSlider lsGrab lSSlide">
                      {product.images &&
                        product.images.map((image, index) => {
                          return (
                            <div
                              key={index}
                              id={`img-${index}`}
                              data-thumb=""
                              className={`lslide ${index} ${index ===
                                imageIndex && "active"}`}
                            >
                              <img src={image.src} alt="product" />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <ul className="lSPager product-details-gallery">
                    {product.images &&
                      product.images.map((image, index) => {
                        return (
                          <li
                            key={index}
                            id={`img-${index}`}
                            className={`product-thumbnail ${index} ${index ===
                              imageIndex && "active"}`}
                            onMouseEnter={() => setImageIndex(index)}
                          >
                            <a href="#js">
                              <img src={image.src} alt="product" />
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="product-details-text">
                <h3>{product.productName}</h3>
                <h2>{product.cost}</h2>
                <ul className="list">
                  <li>
                    <a className="active" href="#js">
                      <span>Category</span> : {product.category}
                    </a>
                  </li>
                  <li>
                    <a href="#js">
                      <span>Availibility</span> : In Stock
                    </a>
                  </li>
                </ul>
                <p>{product.description}</p>
                <div className="card_area">
                  <div className="product_count">
                    <div className="form-group">
                      <label htmlFor="exampleSelect1">Quantity:</label>
                      <select className="form-control" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <span className="btn_3">add to cart</span>
                    <span className="premium">
                      <FontAwesomeIcon icon={faGem} />
                    </span>
                    <span
                      className={product.isLike ? "like_us liked" : "like_us"}
                      onClick={() => props.toggleLike(product.id)}
                    >
                      <FontAwesomeIcon
                        icon={product.isLike ? faHeartSolid : faHeart}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { products: state.products };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleLike }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
