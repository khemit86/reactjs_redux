import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {

   

    const [homepageProducts, sethomepageProducts] = useState({})
    const [products,setProducts] = useState({})
  
    const gethomepageProducts = async ()=>{

        let data = await fetch(`${process.env.REACT_APP_API_URL}products?limit=5`)
        let parsedData  = await data.json()
        sethomepageProducts(parsedData)

    }

    const getProducts = async ()=>{

        let data = await fetch(`${process.env.REACT_APP_API_URL}products`)
        let parsedData = await data.json()
        setProducts(parsedData)
        
    }
    
    return (<ProductContext.Provider value={{homepageProducts,products,gethomepageProducts,getProducts}}>{props.children}</ProductContext.Provider>)


}

export default ProductState
