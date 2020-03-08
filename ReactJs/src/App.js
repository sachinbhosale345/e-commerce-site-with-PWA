import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./modules/header/header";
import ProductList from "./modules/product/productList";
import ProductDetail from "./modules/product/productDetail";
import Footer from "./modules/footer/footer";
import ScrollToTop from "./common/components/scrollTop";

import "./App.scss";

const App = () => {
  return (
    <div className="home-page">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/detail/:id" component={ProductDetail} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
