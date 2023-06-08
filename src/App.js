import './App.css';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Top from './components/common/Top';
import Footer from './components/common/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import ProductState from './context/products/ProductState';
import ProductDetail from './components/ProductDetail';
import CartState from './context/cart/CartState';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { messageactionCreators } from './action-creators/message';
import Checkout from './components/Checkout';





function App() {
  
  const location= useLocation();
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch(messageactionCreators.clearMessage(''))
    
  },[location])

  return (
    <>
   
    <ProductState>
    <CartState>
    <Top />
    <Header />
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} ></Route>
    <Route exact path="/products" element={<Products />} ></Route>
    <Route exact path="/aboutus" element={<Aboutus />}></Route>
    <Route exact path="/product-detail/:id" element={<ProductDetail />}></Route>
    <Route exact path="/cart" element={<Cart />}></Route>
    <Route exact path="/login" element={<Login />}></Route>
    <Route exact path="signup" element={<Signup />}></Route>
    <Route exact path="/profile" element={<Profile/>}></Route>
    <Route exact path="/checkout" element={<Checkout/>}></Route>
    </Routes>
    <Footer />
    </CartState>
    </ProductState>
    </>
  );
}

export default App;
