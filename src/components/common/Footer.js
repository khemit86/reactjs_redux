import React from 'react'


const Footer = () => {
  return (
    <section id="footer" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="footer_1 clearfix">
    <div className="col-sm-3">
	 <div className="footer_1l clearfix">
	   <h2 className="mgt"><a href="/"><span className="col_1">Tool</span> Store</a></h2>
	   <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart...</p>
	   <div className="footer_1li cleafix">
	    <span className="col_1"><i className="fa fa-headphones"></i></span>
		<h5>Customer Support</h5>
		<h4><a href="/">(00) 123 456 789</a></h4>
	   </div>
	 </div>
	</div>
	<div className="col-sm-5">
	 <div className="footer_1m clearfix">
	  <h4>Subscribe Newsletter To Get Updated</h4><br />
	  <div className="header_1m clearfix">
	  <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
                Subscribe</button>
        </span>
        </div>
	 </div>
	  <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart...</p>
      <ul className="social-network social-circle">
                        <li><a href="/" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                        <li><a href="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="/" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
	 </div>
	</div>
	<div className="col-sm-4">
	 <div className="footer_1r clearfix">
	  <h4>Information</h4>
	  <ul>
	   <li><a href="/">Delivery <span className="pull-right">Legal Notice</span></a></li>
	   <li><a href="/">About Us <span className="pull-right">Secure payment</span></a></li>
	   <li><a href="/">Contact Us <span className="pull-right">Sitemap</span></a></li>
	   <li><a href="/">Stores <span className="pull-right">My Account</span></a></li>
	  </ul>
	 </div>
	</div>
   </div>
   <div className="footer_2 text-center clearfix">
    <div className="col-sm-12">
	 <p className="mgt">© 2013 Your Website Name. All Rights Reserved | Design by <a className="col_1" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
	</div>
   </div>
  </div>
 </div>
</section>
  )
}

export default Footer
