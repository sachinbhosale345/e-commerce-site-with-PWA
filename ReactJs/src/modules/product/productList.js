import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FullHeightBanner from "./../header/fullHeightBanner";
import ProductCard from "./productCard";
import Loader from "./../../common/components/loader";
import { requestProducts, toggleLike } from "./../../actions";

import "./product.scss";

const ProductList = props => {
  useEffect(() => {
    props.products.length === 0 && props.requestProducts();
  }, []);

  return (
    <React.Fragment>
      <FullHeightBanner />
      <section id="product-list">
        <div className="container xl-pl-0 xl-pr-0">
          <div className="products row">
            {props.isLoading ? (
              <Loader />
            ) : (
              props.products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  toggleLike={props.toggleLike}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return { products: state.products, isLoading: state.isLoading };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestProducts,
      toggleLike
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
