import React from 'react'

const Categories = (props) => {

	const {listCategories} = props

  return (
    <section id="Categ">
 <div className="container">
  <div className="row">
   <div className="Categ_1 clearfix">
    <div className="col-sm-12">
	 <h3 className="mgt">Popular Categories</h3>
	<hr/>
	</div>
   </div>
   <div className="Categ_2 clearfix">
    { listCategories.map((category,i)=>{


	
    return <div key={i} className="col-sm-3">
	 <div className="Categ_2i clearfix">
	  <a href="/"><img src="img/5.jpg" alt="abc" /></a>
	  <h4 className="mgt"><a href="/">{category}</a></h4>
	 </div>
	</div>
	})}
   </div>
   
  </div>
 </div>
</section>

  )
}

export default Categories
