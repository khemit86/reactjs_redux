import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <section id="top">
      <div className="container">
        <div className="row">
          <div className="top_1 clearfix">
            <div className="col-sm-3">
              <div className="top_1l clearfix">
                <p className="mgt small">Welcome to our store!</p>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="top_1r clearfix">
                <ul className="nav navbar-nav nav_1 mgt navbar-right">
                  <li className="dropdown bord_l">
                    <a
                      className="font_tag border_none"
                      href="/"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      Setting<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu drop_1" role="menu">
                      <li>
                        <a href="/">Checkout</a>
                      </li>
                      <li>
                        <Link to="/profile">My Account</Link>
                      </li>
                      <li>
                        <a href="/">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="/">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
