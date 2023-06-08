import React, { useState } from "react";
import "../css/checkout.css";

const Checkout = () => {

  const initUser = {firstname:'',lastname:'',username:'',email:'',password:'',city:'',street_no:'',zipcode:'',phone_number:'',state:'',country:''}    


  const [userData,setUserdata]  = useState(initUser)

  const onClick = ()=>{
      alert("hi")

  }

  const onChange = (e)=>{

    setUserdata({...userData,[e.target.name]:e.target.value})
    console.log(userData)

  }



  return (
    <>
      <section id="center" className="clearfix center_shop">
        <div className="container">
          <div className="row">
            <div className="center_shop_1 clearfix">
              <div className="col-sm-6">
                <div className="center_shop_1l clearfix">
                  <h3 className="mgt">Checkout</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="center_shop_1r text-right clearfix">
                  <h5>
                    <a className="col_2" href="/">
                      Home
                    </a>{" "}
                    / <span>Checkout</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="checkout" className="clearfix">

        <div className="container">
          <div className="row">
            <div className="checkout_1 clearfix">
              <div className="col-sm-8">
                <div className="checkout_1l clearfix">
                  <h3 className="mgt">Make Your Checkout Here</h3>
                  <p>Please register in order to checkout more quickly</p>
                </div>
                <br />
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      First Name <span className="col_1">*</span>
                    </h5>
                    <input className="form-control"  type="text" name="firstname" onChange={onChange} />
                  </div>
                  <div className="col-sm-6 space_left">
                    <h5>
                      Last Name <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="lastname" onChange={onChange} />
                  </div>
                </div>
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      Username <span className="col_1">*</span>
                    </h5>
                    <input className="form-control"  type="text" name="username" onChange={onChange} />
                  </div>
                  <div className="col-sm-6 space_left">
                    <h5>
                      Password<span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="password" name="password" onChange={onChange} />
                  </div>
                </div>
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      Email Address <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="email" onChange={onChange}/>
                  </div>
                  <div className="col-sm-6 space_left">
                    <h5>
                      Phone Number <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="phone_number" onChange={onChange} />
                  </div>
                </div>
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      Country <span className="col_1">*</span>
                    </h5>
                    <select className="form-control" name="country" onChange={onChange}>
                      <option value="">Select</option>
                      <option value="India">India</option>
                      <option value="Paksitan">Paksitan</option>
                      <option value="Russia">Russia</option>
                      <option value="England">England</option>
                      <option value="Nepal">Nepal</option>
                    </select>
                  </div>
                  <div className="col-sm-6 space_left">
                    <h5>
                      State / Divition <span className="col_1">*</span>
                    </h5>
                    <select className="form-control" name="state" onChange={onChange}>
                    <option value="P">Select the state</option>
                      <option value="UP">UP</option>
                      <option value="MP">MP</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Jharkhand">Jharkhand</option>
                    </select>
                  </div>
                </div>
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      City <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="street_no" onChange={onChange}/>
                  </div>
                  <div className="col-sm-6 space_left">
                    <h5>
                      Street <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="city" onChange={onChange} />
                  </div>
                </div>
                <div className="checkout_1l1 clearfix">
                  <div className="col-sm-6 space_left">
                    <h5>
                      Postal Code <span className="col_1">*</span>
                    </h5>
                    <input className="form-control" type="text" name="zipcode" onChange={onChange} />
                  </div>
                  <div className="col-sm-6 space_left">
                    
                  </div>
                </div>
                <div className="checkout_1l clearfix">
                 
                </div>
              </div>
              <div className="col-sm-4">
                <div className="checkout_1r clearfix">
                  <h4 className="mgt">CART TOTALS</h4>
                  <hr className="hr_1" />
                  <h5>
                    Sub Total <span className="pull-right">$230.00</span>
                  </h5>
                  <h5>
                    (+) Shipping <span className="pull-right">$20.00</span>
                  </h5>
                  <hr className="hr_2" />
                  <h5>
                    Total <span className="pull-right">$250.00</span>
                  </h5>
                  <br />
                  <h4>PAYMENTS</h4>
                  <hr className="hr_1" />
                  <p>
                    <input type="radio" /> <span>Check Payments</span>
                  </p>
                  <p>
                    <input type="radio" /> <span>Cash On Delivery</span>
                  </p>
                  <p>
                    <input type="radio" /> <span>PayPal</span>
                  </p>
                  <br />
                  <h6>
                    <a className="button" href="/" onClick={onClick}>
                      PROCEED TO CHECKOUT
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout
