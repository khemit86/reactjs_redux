import React, { useContext, useEffect, useState } from 'react'
import Categories from './Categories'
import NewarrivalProduct from './NewarrivalProduct'
import Connect from './Connect'
import productContext from '../context/products/productContext'





const Home = () => {
const [listCategories,setlistCategories] = useState([])
const context = useContext(productContext);
const {homepageProducts,gethomepageProducts} = context




const fetchCategories = async () =>{

 
  let data = await fetch(`${process.env.REACT_APP_API_URL}products/categories`)
  console.log(data);
  let parsedData = await data.json();
  setlistCategories(parsedData)

}

  useEffect(()=>{
    // eslint-disable-next-line
    fetchCategories()
    gethomepageProducts()
    


  },[])
  return (
    <>
        <Categories listCategories={listCategories} />
        <NewarrivalProduct homepageProducts={homepageProducts} />
        <Connect />
    </>
  )
}

export default Home
