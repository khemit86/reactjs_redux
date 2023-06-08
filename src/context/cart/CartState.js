import React, { useState } from 'react'
import CartContext from './cartContext';

const CartState = (props) => {
    const [cartData,setCartData] = useState([])


    const totalAmount = cartData.reduce((accumulator, item) => accumulator + item.price*item.quantity, 0);

    const incrementQuantity = (productData) => {
        let cartItem = {
            id:productData.id,
            title:productData.title,
            description:productData.description,
            image:productData.image,
            price:productData.price,
            quantity:'1'
        }
        if(cartData.length === 0 ){
            setCartData([...cartData, cartItem]);
        }else{
            let check = false;
            let updated_cart = cartData.map((item)=>{
                if(item.id ===productData.id) 
                {
                    check = true;
                    return {
                        ...item,
                        quantity:(parseInt(item.quantity) + 1).toString()
                    }
                }
            })
            if(!check){
                let _cartItem = {
                    id: productData.id,
                    title: productData.title,
                    description: productData.description,
                    image: productData.image,
                    price: productData.price,
                    quantity: '1'
                };
                updated_cart.push(_cartItem);
            }
            setCartData(updated_cart)

        }


      
    }

    const decrementQuantity = (productData) =>{
        let updated_cart = cartData.map((item)=>{
            if(item.id ===productData.id && item.quantity>=1) 
            {
                return {
                    ...item,
                    quantity:(parseInt(item.quantity) - 1).toString()
                }
            }
            return item
        })
        updated_cart = updated_cart.filter((item)=>item.quantity > 0)
        setCartData(updated_cart)

    }

    const removeItem = (id)=>{
       let updated_cart=  cartData.filter((item)=>item.id != id)
        setCartData(updated_cart)
    }
    const addToCart = (productData)=>{
        //setCartData([...cartData,productData]);
        //console.log(cartData,'hiii')
        let cartItem = {
            id:productData.id,
            title:productData.title,
            description:productData.description,
            image:productData.image,
            price:productData.price,
            quantity:'1'
        }
        if(cartData.length === 0 ){
            setCartData([...cartData, cartItem]);
        }else{
            let check = false;
            let updatedCartData = cartData.map((item,key)=>{
                if(item.id === cartItem.id ){
                    check=true;
                    return {
                        ...item,
                        quantity:(parseInt(item.quantity) + 1).toString()
                    }
                }
                return item;
            });

            if(!check){
                    let _cartItem = {
                    id: productData.id,
                    title: productData.title,
                    description: productData.description,
                    image: productData.image,
                    price: productData.price,
                    quantity: '1'
                };
                updatedCartData.push(_cartItem);
            }
            setCartData(updatedCartData);

        }

    }

  return (
    <CartContext.Provider value={{addToCart,cartData,incrementQuantity,decrementQuantity,removeItem,totalAmount}}>{props.children}</CartContext.Provider>
  )
}

export default CartState
