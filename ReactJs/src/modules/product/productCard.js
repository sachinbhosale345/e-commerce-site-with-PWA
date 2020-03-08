import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product, toggleLike }) => {
  const history = useHistory();
  return (
    <article className="product-miniature js-product-miniature col-xs-12 col-sm-12 col-md-6 col-lg-2">
      <div className="thumbnail-container">
        <div className="product-thumbnail">
          <a href="#js" className="thumbnail">
            <img
              src={product && product.images.length && product.images[0].src}
              alt={product.productName}
            />
          </a>
          <div className="product-list-actions">
            <button
              className={
                product.isLike ? "btn-primary like liked" : "btn-primary like"
              }
              data-button-action="to-like"
              type="button"
              onClick={() => toggleLike(product.id)}
            >
              <FontAwesomeIcon icon={product.isLike ? faHeartSolid : faHeart} />
            </button>
            <button
              className="btn-primary view"
              data-button-action="to-view"
              type="button"
              onClick={() => history.push(`/detail/${product.id}`)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <div className="product-description">
          <h3 className="h3 product-title" itemProp="name">
            <a href="#js">{product.productName}</a>
          </h3>
          <span className="product-price">{product.cost}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
