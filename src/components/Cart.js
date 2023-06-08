import React from 'react'
import '../css/cart.css'
import { useSelector,useDispatch } from 'react-redux'
import { actionCreators } from '../action-creators/cart'
import { bindActionCreators } from 'redux'



const Cart = () => {

	const dispatch = useDispatch()
	const {cartData,totalAmount} = useSelector((state)=>state.cart)
	const {increaseQuantity,decreaseQuantity,deleteCartitem} = bindActionCreators(actionCreators,dispatch)
   
  return (
    <>
    <section id="center" className="clearfix center_shop">
<div className="container">
 <div className="row">
   <div className="center_shop_1 clearfix">
    <div className="col-sm-6">
	 <div className="center_shop_1l clearfix">
	  <h3 className="mgt">Shopping Cart</h3>
	 </div>
	</div>
	<div className="col-sm-6">
	 <div className="center_shop_1r text-right clearfix">
	  <h5><a className="col_2" href="/">Home</a> / <span>Shopping Cart</span></h5>
	 </div>
	</div>
   </div>
 </div>
</div>
</section>
<section id="cart_page" className="clearfix cart">
 <div className="container">
  <div className="row">
    <div className="cart_1 clearfix">
	 <div className="col-sm-12">
	  <p className="mgt"><a href="/">Home</a> / <a href="/">Shopping Cart</a></p>
	 </div>
	</div>
	<div className="cart_2 clearfix">
	 <div className="col-sm-6">
	  <h3 className="bold col_1">MY CART</h3>
	 </div>
	 <div className="col-sm-6">
      <h5 className="text-right"><a href="/">Continue Shopping</a></h5>
	 </div>
	</div>
	<div className="cart_3 clearfix">
	 <div className="col-sm-8">
	  <div className="cart_3l clearfix">
	   <h5 className="mgt">PRODUCT</h5>
	  </div>
        {cartData.map((cartItem)=>{
	  return <div className="cart_3l1 clearfix" key={cartItem.id}>
	   <div className="col-sm-3 space_left">
	    <div className="cart_3l1i clearfix">
		 <a href="/"><img src={cartItem.image} alt="abc" className="iw" /></a>		</div>
	   </div>
	   <div className="col-sm-9">
	    <div className="cart_3l1i1 clearfix">
		 <h5 className="mgt"><a href="/">{cartItem.description}</a></h5>
		 <h5 className="normal">{cartItem.title}</h5>
		 <h6>Vendor</h6>
		 <h4>{cartItem.price}</h4>
		 <h5>Quantity</h5>
		</div>
		<div className="cart_3l1i2 clearfix">
         <div className="input-group number-spinner">
				<span className="input-group-btn">
					<button className="btn btn-default" data-dir="dwn" onClick={()=>{decreaseQuantity(cartItem)}} ><span className="glyphicon glyphicon-minus"></span></button>
				</span>
				<input type="text" className="form-control text-center" readOnly="readOnly"  value={cartItem.quantity} />
				<span className="input-group-btn">
					<button className="btn btn-default" data-dir="up" onClick={()=>{increaseQuantity(cartItem)}} ><span className="glyphicon glyphicon-plus"></span></button>
				</span>			</div>
		 <h6 className="mgt"><button className="button_1 mgt" onClick={()=>{deleteCartitem(cartItem)}}>REMOVE</button></h6>
         
		</div>
	   </div>
	  </div>

     })}


	  
	 
	 </div>
	 <div className="col-sm-4">
	  <div className="cart_3r clearfix">
	   <h5 className="mgt head_1">SUBTOTAL</h5>
	   <h3 className="text-center">${totalAmount}</h3>
	   <hr />
	   <h6>Additional comments</h6>
	   <textarea className="form-control"></textarea>
	   <h5 className="text-center"><a className="button" href="/">PROCEED TO CHECKOUT</a></h5><br/>
	   <h5>GET SHIPPING ESTIMATES</h5>
	   <hr />
	  </div>
	  <div className="cart_3r1 clearfix">
	    <h6>Country</h6>
	   <select className="form-control" id="subject" name="subject">
		<option>America</option>
		<option>India</option>
		<option>England</option>
		<option>Africa</option>
		</select><br/>
		<h6>State</h6>
	   <select className="form-control" id="subject" name="subject">
		<option>Delhi</option>
		<option>Uttar Pradesh</option>
		<option>Punjab</option>
		<option>Madhya Pradesh</option>
		</select><br />
	  <h6>Postal/Zip Code</h6>
	   <input className="form-control" type="text" />
	   <h5 className="text-center"><a className="button_1" href="/">CALCULATE SHIPPING</a></h5>
	   </div>
	 </div>
	</div>
  </div>
 </div>	 
</section>
</>
  )
}

export default Cart
