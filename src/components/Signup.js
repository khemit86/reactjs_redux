import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageactionCreators } from '../action-creators/message'
import { useNavigate } from 'react-router-dom'




const Signup = () => {

const initUser = {firstname:'',lastname:'',username:'',email:'',password:'',city:'',street_no:'',zipcode:'',phone_number:''}    

const [userData, setUserdata] = useState(initUser)
const [errors,setErrors] = useState({})

const dispatch = useDispatch();
const navigate = useNavigate()
const {message} = useSelector((state)=>state.message)

const onChange = ((e)=>{
    setUserdata({...userData,[e.target.name]:e.target.value})
    setErrors({...errors,[e.target.name]:''})

})

const onSubmit = async (e)=>{
    
    e.preventDefault();
    const validationErrors = {}
    if(userData.firstname === ''){
        validationErrors.firstname="firstname is required"
    }
    if(userData.lastname === ''){
        validationErrors.lastname="lastname is required"
    }
    if(userData.email === ''){
      validationErrors.email="email is required"
    }
    if(userData.username === ''){
      validationErrors.username="username is required"
    }
    if(userData.password === ''){
      validationErrors.password="password is required"
    }

    const noErrors = Object.keys(validationErrors).length === 0;
    
    if(noErrors){
        let data = await fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
        const parsedData = await data.json();
        dispatch(messageactionCreators.setMessage('Signup successfully'))
        navigate('/login')
    }else{
        setErrors(validationErrors)
        dispatch(messageactionCreators.setMessage('Please fill the required fields'))
        
    }
}




  return (
    <>
    {message && 
    <div className="form-group">
        <div className="alert alert-danger">{message}</div>
      </div>}
    <form method="post" onSubmit={onSubmit}>
      <div className="blod_d2 clearfix">
        <h3>
          <span className="col_1">|</span> Signup
        </h3>
      </div>
      <div className="blod_d3 clearfix">
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Firstname <span>*</span>
            </h5>
            <input className="form-control" type="text" name="firstname" onChange={onChange}/>
            {errors.firstname && <div className="error">{errors.firstname}</div> }
          </div>
          <div className="col-sm-6">
            <h5>
              LastName <span>*</span>
            </h5>
            <input className="form-control" type="text" name="lastname" onChange={onChange} />
            {errors.lastname && <div className="error">{errors.lastname} </div>}
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Username <span>*</span>
            </h5>
            <input className="form-control" type="text" name="username" onChange={onChange} />
            {errors.username && <div className="error">{errors.username} </div> }
            
          </div>
          <div className="col-sm-6">
            <h5>
              Email <span>*</span>
            </h5>
            <input className="form-control" type="email" name="email" onChange={onChange} />
            {errors.email && <div className="error">{errors.email} </div> }
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Password <span>*</span>
            </h5>
            <input className="form-control" type="password" name="password" onChange={onChange}/>
            {errors.password && <div className="error">{errors.password} </div> }
          </div>
          <div className="col-sm-6">
            <h5>
              City
            </h5>
            <input className="form-control" type="text" name="city"  onChange={onChange} />
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Street Number
            </h5>
            <input className="form-control" type="text" name="street_no" onChange={onChange} />
          </div>
          <div className="col-sm-6">
            <h5>
              Zipcode 
            </h5>
            <input className="form-control" type="text" name="zipcode" onChange={onChange}  />
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-6">
            <h5>
              Phone number
            </h5>
            <input className="form-control" type="text" name="phone_number"  onChange={onChange}/>
          </div>
          <div className="col-sm-6">
            
          </div>
        </div>
        <div className="blod_d3i clearfix">
          <div className="col-sm-12">
            <h5>
              <button className="button" type="submit">Signup</button>
            </h5>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default Signup
