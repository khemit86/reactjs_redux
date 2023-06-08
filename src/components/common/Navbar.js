import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authactionCreators } from "../../action-creators/auth";
import { actionCreators } from "../../action-creators/cart";
import { messageactionCreators } from "../../action-creators/message";


const Navbar = () => {
  let location = useLocation();
  let auth = useSelector((state) => state.auth);
  const {isLoggedIn, user} = auth
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  
const logout = ()=>{
	dispatch(authactionCreators.logout())
	dispatch(actionCreators.emptyCart())
  dispatch(messageactionCreators.setMessage('Logged out succesfully'))

	localStorage.removeItem('token')
	navigate('/login');

}	



  return (
    <section id="menu" className="clearfix cd-secondary-nav">
      <nav className="navbar nav_t">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="/bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <i className="fa fa-wrench"></i>{" "}
              <span className="col_1">Tool</span> Store
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/" ? "active_tab" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/products" ? "active_tab" : ""
                  }`}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="dropdown">
                <a
                  className="m_tag"
                  href="/"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Blog<span className="caret"></span>
                </a>
                <ul className="dropdown-menu drop_3" role="menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a className="border_none" href="blog_detail.html">
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/aboutus" ? "active_tab" : ""
                  } `}
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a className="m_tag" href="contact.html">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/checkout" className={`m_tag ${
                    location.pathname === "/aboutus" ? "active_tab" : ""
                  } `}>Checkout</Link>
              </li>
              <li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/cart" ? "active_tab" : ""
                  } `}
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
              
				{!isLoggedIn && user===null?(
				<li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/login" ? "active_tab" : ""
                  } `}
                  to="/login"
                >
                  Login
                </Link>
              	</li>):(<li><Link to="/login" className="m_tag" onClick={logout}>Logout</Link></li>)}
                { !isLoggedIn && user===null && 
                <li>
                <Link
                  className={`m_tag ${
                    location.pathname === "/signup" ? "active_tab" : ""
                  } `}
                  to="/signup"
                >
                  Signup
                </Link>
                </li>
                }
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
