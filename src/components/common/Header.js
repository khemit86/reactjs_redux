import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

const {cartData,totalAmount} = useSelector((state)=>state.cart)

  return (
    <section id="header">
 <div className="container">
  <div className="row">
   <div className="header_1 clearfix">
    <div className="col-sm-3">
	 <div className="header_1l clearfix">
	  <h2 className="mgt"><a href="index.html"><i className="fa fa-wrench"></i> <span className="col_1">Tool</span> Store</a></h2>
	 </div>
	</div>
	<div className="col-sm-6">
	 <div className="header_1m clearfix">
	  <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
                <i className="fa fa-search"></i></button>
        </span>
        </div>
	 </div>
	</div>
	<div className="header_1r clearfix">
	  <ul className="nav navbar-nav mgt navbar-right">
				<li><a className="tag_m1" href="/"><i className="fa fa-heart-o"></i></a></li>
				<li><Link className="tag_m1" to="/profile"><i className="fa fa-user"></i></Link></li>
				<li className="dropdown">
					  <a className="tag_m1" href="/" data-toggle="dropdown" role="button" aria-expanded="false"><i className="glyphicon glyphicon-shopping-cart"></i>{cartData.length}</a>
					  <ul className="dropdown-menu drop_1" role="menu">
						<li>
						 <div className="drop_1i clearfix">
						  <div className="col-sm-6">
						   <div className="drop_1il clearfix"><h5 className="mgt">{cartData.length} ITEMS</h5></div>
						  </div>
						  <div className="col-sm-6">
						   <div className="drop_1il text-right clearfix"><h5 className="mgt"><a href="/cart">VIEW CART</a></h5></div>
						  </div>
						 </div>

						{cartData.map((item )=>{
						 return <div className="drop_1i1 clearfix" key={item.id}>
						  <div className="col-sm-8">
						   <div className="drop_1i1l clearfix"><h6 className="mgt bold"><a href="/">{item.title}</a> <br /> <span className="normal col_2">{item.quantity}x - {item.price *item.quantity}</span> <br /> <span><i className="fa fa-remove"></i></span></h6></div>
						  </div>
						  <div className="col-sm-4">
						   <div className="drop_1i1r text-right clearfix"><a href="/"><img src={item.image} className="iw" alt="abc" /></a></div>
						  </div>
						 </div>
						 })}
						 
						 <div className="drop_1i2 clearfix">
						  <div className="col-sm-6">
						   <div className="drop_1il clearfix"><h5 className="mgt">TOTAL</h5></div>
						  </div>
						  <div className="col-sm-6">
						   <div className="drop_1il text-right clearfix"><h5 className="mgt">${totalAmount}</h5></div>
						  </div>
						 </div>
						 <div className="drop_1i3 text-center clearfix">
						  <div className="col-sm-12">
						   <h5><a className="button_1 block" href="/">CHECKOUT</a></h5>
						   <h5><a className="button block" href="/">VIEW CART</a></h5>
						  </div>
						 </div>
						</li>
					  </ul>
                    </li>
			    </ul>
	 </div>
   </div>
  </div>
 </div>
</section>
  )
}

export default Header
