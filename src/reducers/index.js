import { combineReducers } from "redux";
import authReducer from './authReducers'
import cartReducer from './cartReducers'
import messageReducer from './messageReducers'

 const reducers = combineReducers({
    auth:authReducer,
    cart:cartReducer,
    message:messageReducer
})
export default reducers