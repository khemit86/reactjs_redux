import React, { useContext, useEffect, useState } from "react";
import "../css/shop.css";
import productContext from "../context/products/productContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductPageCategories from "./ProductPageCategories";

const Products = () => {
  const context = useContext(productContext);
  const { getProducts, products } = context;
  const {message} = useSelector((state)=>state.message)
  const [productCategories,setProductCategories] = useState([])


  const getCategories = async ()=>{
    const data = await fetch('https://fakestoreapi.com/products/categories')
    const parsedData = await data.json();
    //console.log(parsedData)
    setProductCategories(parsedData);
    //console.log('khemit',productCategories)
  }

  useEffect(() => {
    // eslint-disable-next-line
    getProducts();
    getCategories();
   

  }, []);

  return (
    <>
	 { message && 
      <div className="form-group">
        <div className="alert alert-success">{message}</div>
      </div>
	}
	

      <section id="center" className="clearfix center_shop">
        <div className="container">
          <div className="row">
            <div className="center_shop_1 clearfix">
              <div className="col-sm-6">
                <div className="center_shop_1l clearfix">
                  <h3 className="mgt">Shop Grid Sidebar Left</h3>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="center_shop_1r text-right clearfix">
                  <h5>
                    <a className="col_2" href="/">
                      Home
                    </a>{" "}
                    /{" "}
                    <a className="col_2" href="/">
                      Shop
                    </a>{" "}
                    / <span>Shop Grid Sidebar Left</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="shop">
        <div className="container">
          <div className="row">
            <div className="shop_1 clearfix">
              <div className="col-sm-3">
                <div className="shop_1lm clearfix">
                  <div className="product_1l mgt clearfix">
                    <h4 className="mgt">Shop By Price</h4>
                    <hr />
                    <h6>Range:</h6>
                    <h5 className="bold"> $120 - $250</h5>
                    <br />
                    <h5>
                      <input type="checkbox" /> <a href="/">$20 - $50 (2)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">$50 - $80 (5)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">$80 - $120 (7</a>)
                    </h5>
                  </div>
                 <ProductPageCategories categories={productCategories} />
                  <div className="product_1l clearfix">
                    <h4 className="mgt">MANUFACTURER</h4>
                    <hr />
                    <h5>
                      <input type="checkbox" /> <a href="/">Brake Parts(5)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Accessories (11)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Engine Parts (3)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Hermes (12)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" />{" "}
                      <a href="/">Tommy Hilfiger(6)</a>
                    </h5>
                  </div>
                  <div className="product_1l clearfix">
                    <h4 className="mgt">SELECT BY COLOR</h4>
                    <hr />
                    <h5>
                      <input type="checkbox" /> <a href="/">Black (1)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Blue (2)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Brown (3)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Green (4)</a>
                    </h5>
                    <h5>
                      <input type="checkbox" /> <a href="/">Pink (5)</a>
                    </h5>
                  </div>
                  <div className="product_1l clearfix">
                    <h4 className="mgt">Recent Post</h4>
                    <hr />
                    <div className="product_1li clearfix">
                      <img src="img/1.jpg" alt="abc" />
                      <h5 className="mgt">
                        <a href="/">Best Tool</a> <br />
                        $89.00
                      </h5>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                    </div>
                    <div className="product_1li clearfix">
                      <img src="img/2.png" alt="abc" />
                      <h5 className="mgt">
                        <a href="/">Nice tool</a> <br />
                        $69.00
                      </h5>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </span>
                    </div>
                    <div className="product_1li border_none pdb clearfix">
                      <img src="img/33.jpg" alt="abc" />
                      <h5 className="mgt">
                        <a href="/">Good Tool</a> <br />
                        $99.00
                      </h5>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="product_1rm clearfix">
                  <div className="product_1r clearfix">
                    <h5 className="mgt">Show :</h5>
                    <select className="form-control">
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                      <option>50</option>
                    </select>
                    <h5 className="mgt"> Sort By :</h5>
                    <select className="form-control">
                      <option>Default</option>
                      <option>Popularity</option>
                      <option>Latest</option>
                      <option>Price: low to high</option>
                      <option>Price: high to low</option>
                    </select>
                  </div>
                  <div className="sell_o_1 clearfix">
                    {products.length !== undefined &&
                      products.map((product) => {
                        return (
                          <div className="col-sm-4" key={product.id}>
                            <div className="arriv_2m clearfix">
                              <div className="arriv_2m1 clearfix">
                                <Link to={`/product-detail/${product.id}`}>
                                  <img
                                    src={product.image}
                                    alt="abc"
                                    className="iw"
                                  />
                                </Link>
                              </div>

                              <div className="arriv_2m3 clearfix">
                                <h4 className="bold mgt">{product.title}</h4>
                                <p>
                                  {" "}
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
                                  <span className="span_3 col_1">
                                    {" "}
                                    {product.price}
                                  </span>
                                </h3>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="product_1_last text-center clearfix">
                    <div className="col-sm-12">
                      <ul>
                        <li className="act">
                          <a href="/">1</a>
                        </li>
                        <li>
                          <a href="/">2</a>
                        </li>
                        <li>
                          <a href="/">3</a>
                        </li>
                        <li>
                          <a href="/">4</a>
                        </li>
                        <li>
                          <a href="/">5</a>
                        </li>
                        <li>
                          <a href="/">6</a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
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

export default Products;
