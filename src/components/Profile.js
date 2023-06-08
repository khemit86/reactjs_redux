import React, { useEffect, useState } from "react";
import "../css/cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const {isLoggedIn,user} = useSelector(state=>state.auth)
    const navigate = useNavigate();
   


    const [profile, setProfile] = useState('');
    const getProfile = async () => {
    let data = await fetch("https://fakestoreapi.com/users/1");
    let parsedData = await data.json();
    setProfile(parsedData);
  };

  
  useEffect(() => {
    
    // eslint-disable-next-line
    if(isLoggedIn && user != null){
        getProfile();
    }else{
        navigate('/login')
    } 
  },[]);
  return (
   
    <section id="cart_page" className="clearfix cart">
        {profile !== '' && 
      <div className="container">
        <div className="row">
          <div className="cart_1 clearfix">
            <div className="col-sm-12">
              <p className="mgt">
                <a href="/">Home</a> / Profile
              </p>
            </div>
          </div>
          <div className="cart_2 clearfix">
            <div className="col-sm-6">
              <h3 className="bold col_1">Profile</h3>
            </div>
            <div className="col-sm-6">
              <h5 className="text-right"></h5>
            </div>
          </div>
          <div className="cart_3 clearfix">
            <div className="col-sm-12">
             
              <div className="cart_3l1 clearfix">
                <div className="col-sm-12">
                 
                  <div className="cart_3l1i1 clearfix">
                  <h4>Name: {profile.name.firstname} {profile.name.lastname}</h4>
                  </div>
                  <div className="cart_3l1i1 clearfix">
                  <h4>Email: {profile.email}</h4>
                  </div>
                  <div className="cart_3l1i1 clearfix">
                  <h4>Phone: {profile.phone}</h4>
                  </div>
                  <div className="cart_3l1i1 clearfix">
                  <h4>Username: {profile.username}</h4>
                  <h4>Address: {profile.address.street},{profile.address.city},{profile.address.zipcode}</h4>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </section> 
  );
};

export default Profile;
