const user = localStorage.getItem('token')
const initialState = user?{isLoggedIn:true,user}:{isLoggedIn:false,user:null}
export default function auth(state=initialState,action){

   const {type,payload} = action
    switch(type){
        case 'LOGIN_SUCCESS':
            return {...state,isLoggedIn:true,user:payload}

        case 'LOGOUT':
           
           return{...state,isLoggedIn:false,user:null}

        default:
            return state    
    }
}