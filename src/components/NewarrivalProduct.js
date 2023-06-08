import React from "react";
import { Link } from "react-router-dom";

const NewarrivalProduct = (props) => {
  const {homepageProducts} = props
 
  return (
    <section id="sell">
      <div className="container">
        <div className="row">
          <div className="sell_1_o clearfix">
            <div className="col-sm-5 space_left sell_1_ol">
              <h2 className="mgt">New Arrivals</h2>
              <hr />
            </div>
            <div className="col-sm-7 space_left">
              <div className="clearfix sell_1_or text-right">
                <ul className="nav_1_tab">
                  <li className="active">
                    <a data-toggle="tab" href="/home">
                      NEW{" "}
                    </a>
                  </li>
                  <li className="">
                    <a data-toggle="tab" href="/menu1">
                      TRENDING{" "}
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="/menu2">
                      POPULAR{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content clearfix">
            <div id="home" className="tab-pane fade  clearfix active in">
              <div className="click clearfix">
                <div className="sell_o_1 clearfix">
                {homepageProducts.length !== undefined &&  homepageProducts.map((product)=>{
                    
                  return <div className="col-sm-3 space_left" key={product.id}>
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                      <Link to={`/product-detail/${product.id}`}>
                          <img src= {product.image} width="300" height="300" alt="abc" className="iw" />
                        </Link>
                      </div>

                     
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">{product.title}</h4>
                        <p>
                        <Link to={`/product-detail/${product.id}`}>
                           {product.description}
                          </Link>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$45.00</span>
                          <span className="span_3 col_1">  {product.price}</span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  }) }
                  
                </div>
              </div>
            </div>
            <div id="menu1" className="tab-pane fade  clearfix">
              <div className="click clearfix">
                <div className="sell_o_1 clearfix">
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/20.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">PRODUCT</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$45.00</span>
                          <span className="span_3 col_1"> $34.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/21.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">OTHER</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$55.00</span>
                          <span className="span_3 col_1"> $44.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/22.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">POPULAR</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$65.00</span>
                          <span className="span_3 col_1"> $54.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/23.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">TRENDING</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$75.00</span>
                          <span className="span_3 col_1"> $66.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="menu2" className="tab-pane fade  clearfix">
              <div className="click clearfix">
                <div className="sell_o_1 clearfix">
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/16.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">PRODUCT</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$45.00</span>
                          <span className="span_3 col_1"> $34.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/17.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">OTHER</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$55.00</span>
                          <span className="span_3 col_1"> $44.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/18.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">POPULAR</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$65.00</span>
                          <span className="span_3 col_1"> $54.00</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 space_left">
                    <div className="arriv_2m clearfix">
                      <div className="arriv_2m1 clearfix">
                        <a href="/">
                          <img src="img/19.jpg" alt="abc" className="iw" />
                        </a>
                      </div>
                      <div className="arriv_2m2 clearfix">
                        <h5 className="text-center mgt">New</h5>
                      </div>
                      <div className="arriv_2m2n clearfix">
                        <h5 className="text-center mgt">Sale</h5>
                      </div>
                      <div className="arriv_2m3 clearfix">
                        <h4 className="bold mgt">TRENDING</h4>
                        <p>
                          <a href="/">
                            Naminos elementum disus tincidunts cosmo de
                            cosmopolis
                          </a>
                        </p>
                        <span className="span_1">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h3 className="normal">
                          <span className="span_2">$75.00</span>
                          <span className="span_3 col_1"> $66.00</span>
                        </h3>
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
  );
};

export default NewarrivalProduct;
