import { CLEAR_MESSAGE,SET_MESSAGE } from "./types"
const setMessage = (payload)=>{
   
   return  (dispatch)=>{
        dispatch({
            type:SET_MESSAGE,
            payload
        })
    }

}




const clearMessage = (payload)=>{
    return (dispatch)=>{
        dispatch({
            type:CLEAR_MESSAGE,
            payload

        })
    }

}

export const messageactionCreators = {
    setMessage,
    clearMessage

}