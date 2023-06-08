import React, { useEffect, useState } from "react";
import '../css/detail.css'
import { useParams } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../action-creators/cart";
import { bindActionCreators } from "redux";


const ProductDetail = () => {
  
    
    const dispatch  = useDispatch()
    const {addTocart,increaseQuantity,decreaseQuantity} = bindActionCreators(actionCreators,dispatch)
    
    const params = useParams()
    const id  = params.id;
    const {cartData} = useSelector((state) => state.cart);
    const[productDetail,setproductDetail] = useState({})


    const getProductDetail = async (id) => {
          
        let data = await fetch(`${process.env.REACT_APP_API_URL}products/${id}`)
        let parsedData = await data.json()
        setproductDetail(parsedData)
    }

    useEffect(()=>{
        getProductDetail(id)
    },[id])

    let findItem = cartData.find(item => item.id === parseInt(id))


  return (
    <>
      <section id="center" className="clearfix center_shop">
        <div className="container">
          <div className="row">
            <div className="center_shop_1 clearfix">
              <div className="col-sm-6">
                <div className="center_shop_1l clearfix">
                  <h3 className="mgt">Product Details</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="center_shop_1r text-right clearfix">
                  <h5>
                    <a className="col_2" href="/">
                      Home
                    </a>
                    <a className="col_2" href="/">
                      Shop
                    </a>
                    / <span>Product Details</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="shop_detail">
        <div className="container">
          <div className="row">
            <div className="shop_detail_1 clearfix">
              <div className="col-sm-6">
                <div className="center_detail_2_left clearfix">
                  <div
                    className="carousel slide article-slide"
                    id="article-photo-carousel"
                  >
                    <div className="carousel-inner cont-slider">
                      <img alt="" src={productDetail.image} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="center_detail_2_right clearfix">
                  <h3 className="mgt"> {productDetail.title}</h3>
                  <h5 className="col_1">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <a href="/">( 3 user review )</a>
                  </h5>
                  <h4>
                    <span className="span_1">$90.00</span>
                    <span className="span_2 col_1">{productDetail.price}</span>
                  </h4>
                  <p>
                    Eget velit. Donec ac tempus ante. Fusce ultricies massa
                    massa. Fusce aliquam, purus eget sagittis vulputate, sapien
                    libero hendrerit est, sed commodo augue nisi non neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <hr />
                  <h4>Available Options</h4>
                  <div className="pd_n clearfix">
                    <h5 className="bold">
                      Color <span className="col_2">*</span>
                    </h5>
                    <ul>
                      <li className="bg_1 act"></li>
                      <li className="bg_2"></li>
                      <li className="bg_3"></li>
                      <li className="bg_4"></li>
                      <li className="bg_5"></li>
                    </ul>
                  </div>
                  <h5>Quantity:</h5>
                  <div className="input-group number-spinner">
                    <span className="input-group-btn">
                      <button className="btn btn-default" data-dir="dwn" disabled={!findItem || (findItem && findItem.quantity===0) } onClick={()=>{ decreaseQuantity(productDetail) }}>
                        <span className="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      readOnly="readOnly"
                      className="form-control text-center"
                      value={findItem?findItem.quantity:0}
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" disabled={!findItem} data-dir="up" onClick={()=>{ increaseQuantity(productDetail)} } >
                        <span className="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                  <div className="pd_n1 clearfix">
                    <h4>
                      {/*<a className="button" href="/"  onClick={()=>{ dispath.actionCreators.addTocart(productDetail)}}>
                       
  </a>*/}
                      <button className="button" onClick={()=>{ addTocart(productDetail) }}> ADD TO CART </button>
                    </h4>
                    <h4>
                      <a className="button_1" href="/">
                        ADD TO WISHLIST
                      </a>
                    </h4>
                  </div>
                  <ul className="social-network social-circle">
                    <li>
                      <a href="/" className="icoRss" title="Rss">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoFacebook" title="Facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoTwitter" title="Twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoGoogle" title="Google +">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoLinkedin" title="Linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product_detail_1 clearfix">
              <ul className="nav nav-tabs tab_1">
                <li className="active">
                  <a data-toggle="tab" href="#home">
                    <i className="fa fa-globe"></i> Description
                  </a>
                </li>
                <li className="">
                  <a data-toggle="tab" href="#menu1">
                    <i className="fa fa-photo"></i> Additional Information
                  </a>
                </li>
                <li className="">
                  <a data-toggle="tab" href="#menu2">
                    <i className="fa fa-cog"></i> Product Review
                  </a>
                </li>
              </ul>
              <div className="tab-content clearfix">
                <div id="home" className="tab-pane fade clearfix active in">
                  <div className="click clearfix">
                    <div className="col-sm-12">
                      <div className="home_i">
                        <p className="mgt">
                        {productDetail.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" className="tab-pane fade clearfix">
                  <div className="click clearfix">
                    <div className="col-sm-12">
                      <div className="menu_i clearfix">
                        <table>
                          <tbody>
                            <tr>
                              <td>Pricing</td>
                              <td>$42.00</td>
                            </tr>
                            <tr>
                              <td>Stock Availability</td>
                              <td>AVAILABLE</td>
                            </tr>
                            <tr>
                              <td>Rating</td>
                              <td>
                                <span>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu2" className="tab-pane fade clearfix">
                  <div className="click clearfix">
                    <div className="col-sm-12">
                      <div className="menu1i clearfix">
                        <div className="menu1ii mgt clearfix">
                          <div className="col-sm-9">
                            <img
                              className="thumbnail"
                              src="img/38.jpg"
                              alt="abc"
                            />
                            <h5>
                              <span className="bold">Conubia Nostra</span>
                              <span className="date">
                                <i className="fa fa-clock-o"></i> May 9, 2019
                              </span>
                            </h5>
                            <p>
                              Really happy with this print. The colors are
                              great, and the paper quality is very good.
                            </p>
                          </div>
                          <div className="col-sm-3 text-right">
                            <span className="">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                        <div className="menu1ii clearfix">
                          <div className="col-sm-9">
                            <img
                              className="thumbnail"
                              src="img/39.jpg"
                              alt="abc"
                            />
                            <h5>
                              <span className="bold">Conubia Nostra</span>
                              <span className="date">
                                <i className="fa fa-clock-o"></i> May 9, 2019
                              </span>
                            </h5>
                            <p>
                              Really happy with this print. The colors are
                              great, and the paper quality is very good.
                            </p>
                          </div>
                          <div className="col-sm-3 text-right">
                            <span className="">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                        <div className="menu1ii clearfix">
                          <div className="col-sm-9">
                            <img
                              className="thumbnail"
                              src="img/40.jpg"
                              alt="abc"
                            />
                            <h5>
                              <span className="bold">Conubia Nostra</span>
                              <span className="date">
                                <i className="fa fa-clock-o"></i> May 9, 2019
                              </span>
                            </h5>
                            <p>
                              Really happy with this print. The colors are
                              great, and the paper quality is very good.
                            </p>
                          </div>
                          <div className="col-sm-3 text-right">
                            <span className="">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                        <div className="menu1i1 clearfix">
                          <div className="col-sm-6 space_left">
                            <h4>ADD A REVIEW</h4>
                            <h5>Name *</h5>
                            <input className="form-control" type="text" />
                            <h5>Email *</h5>
                            <input className="form-control" type="text" />
                            <h5>Your Review</h5>
                            <textarea className="form-control form_1"></textarea>
                            <h5 className="bg">
                              <a className="button" href="/">
                                Submit
                              </a>
                            </h5>
                          </div>
                          <div className="col-sm-6">
                            <div className="grid clearfix">
                              <figure className="effect-jazz">
                                <a href="/">
                                  <img
                                    src="img/34.jpg"
                                    height="400"
                                    className="iw"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
