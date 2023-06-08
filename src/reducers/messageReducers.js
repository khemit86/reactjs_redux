import { CLEAR_MESSAGE,SET_MESSAGE } from "../action-creators/types"
export default function message(state={message:''},action){

    const {type,payload} = action
  
    switch(type){
        case SET_MESSAGE:
            return {...state,message:payload}
        case CLEAR_MESSAGE:
            return {...state,message:''}
        default:
            return state
    }
    

}