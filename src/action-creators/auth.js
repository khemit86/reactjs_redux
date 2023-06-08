const login = (payload)=>{
   
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_SUCCESS',
            payload
			})
    }

}

const logout = (payload)=>{
    return (dispatch)=>{
        dispatch({
            type:'LOGOUT',
            payload
        })
    }
}
export const authactionCreators = {
    login,
    logout
}