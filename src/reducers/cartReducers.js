import {ADDTOCART, DECREASEQUANTITY, INCREASEQUANTITY, DELETE_CART_ITEM } from '../action-creators/types.js'
const initialState = {
  cartData: [],
  totalAmount: 0,
};
export default function cart(state = initialState, action) {
  const { type, payload } = action;
  let totalAmount = 0;
  let existingItemIndex = -1;

  switch (type) {
    case ADDTOCART:
      let cartItem = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        image: payload.image,
        price: payload.price,
        quantity: 1,
      };
      existingItemIndex = state.cartData.findIndex((item) => item.id === payload.id);
      if(existingItemIndex !== -1){
        state.cartData[existingItemIndex].quantity += 1;
      }else{
        state.cartData.push(cartItem)
      }
     
       totalAmount = state.cartData.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
      return {
        ...state,
        totalAmount

        }
    case INCREASEQUANTITY:

     existingItemIndex = state.cartData.findIndex((item) => item.id === payload.id);
     state.cartData[existingItemIndex].quantity++
     totalAmount = state.cartData.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
     return {...state,totalAmount}

     case DECREASEQUANTITY:

     existingItemIndex = state.cartData.findIndex((item) => item.id === payload.id);
    
     state.cartData[existingItemIndex].quantity--;
     state.cartData = state.cartData.filter((item)=>item.quantity >0)
     totalAmount = state.cartData.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
     return {...state,totalAmount}
      


    case DELETE_CART_ITEM:
    existingItemIndex = state.cartData.findIndex((item) => item.id === payload.id);
    if(existingItemIndex !== -1){
       state.cartData.splice(existingItemIndex, 1);
    }
    totalAmount = state.cartData.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    return {...state,totalAmount}
    case 'EMPTY_CART':
      console.log('vee')
      return{...state,cartData: [],totalAmount: 0,}


    default:
      return state;
  }
}
