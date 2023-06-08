import React, { useState } from "react";
import "../css/blog_detail.css";
import { useDispatch, useSelector } from "react-redux";
import { authactionCreators } from "../action-creators/auth";
import {  useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { messageactionCreators } from "../action-creators/message";

const Login = () => {
  
  const dispatch = useDispatch()
  const {setMessage} = bindActionCreators(messageactionCreators,dispatch)
  const navigate = useNavigate()
  const {message} = useSelector((state)=>state.message)
 
  
  const [authCredentials, setAuthCredentials] = useState({
    email: "mor_2314",
    password: "83r5^_",
  });
  const onSubmit = async(e)=>{
  
    e.preventDefault()
    
    let data = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    })
    const parsedData = await data.json()
    localStorage.setItem('token',parsedData.token)
    dispatch(authactionCreators.login(parsedData.token))
    navigate('/products')
    setMessage('Login Succesffuly')
    
  }

  const onChange = (e)=>{
    setAuthCredentials({...authCredentials,[e.target.name]:e.target.value})
  }
  return (
    <>
     { message && 
      <div className="form-group">
        <div className="alert alert-success">{message}</div>
      </div>
	}
    <form method="post" onSubmit={onSubmit}>
      <div className="blod_d2 clearfix">
        <h3>
          <span className="col_1">|</span> Login
        </h3>
      </div>
      <div className="blod_d3 clearfix">
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Your Email <span>*</span>
            </h5>
            <input className="form-control" type="text" name="email" onChange={onChange} value={authCredentials.email}/>
          </div>
          <div className="col-sm-6">
            <h5>
              Your Password <span>*</span>
            </h5>
            <input className="form-control" type="password" name="password" onChange={onChange} value={authCredentials.password} />
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-12">
            <h5>
              <button className="button" type="submit">Login</button>
            </h5>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Login;
