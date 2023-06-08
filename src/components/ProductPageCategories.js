import React from 'react'

const ProductPageCategories = (props) => {
  const {categories} = props
  return (
    <div className="product_1l clearfix">
    <h4 className="mgt">CATEGORIES</h4>
    <hr />
    {categories.map((item,key)=>{
        return <h5 key={key}> 
        <input type="checkbox" /> <a href="/">{item} (1)</a>
         </h5>
    })}
    
    
  </div>
  )
}

export default ProductPageCategories
