import {ADDTOCART, DECREASEQUANTITY, INCREASEQUANTITY, DELETE_CART_ITEM } from './types.js'
const addTocart = (payload) =>{
    return (dispatch)=>{
        dispatch( {
            type:ADDTOCART,
            payload
       })
    }
}

const decreaseQuantity = (payload) =>{
    return (dispatch)=>{
        dispatch( {
            type:DECREASEQUANTITY,
            payload
       })
    }
}

const increaseQuantity = (payload) =>{
    return (dispatch)=>{
        dispatch( {
            type:INCREASEQUANTITY,
            payload
       })
    }
}

const deleteCartitem = (payload)=>{
    return (dispatch)=>{
        dispatch({
            type:DELETE_CART_ITEM,
            payload
        })
    }
}

const emptyCart = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'EMPTY_CART',
        })
    }
}

export const actionCreators = {
    addTocart,
    deleteCartitem,
    increaseQuantity,
    decreaseQuantity,
    emptyCart

}
