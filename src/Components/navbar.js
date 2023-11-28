import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logoimg from '../assests/bakeryicon.png';
import cartimg from '../assests/icons-cart.png';
import logoutimg from '../assests/icons8-logout-48.png';
import userimg from '../assests/icons-user-.png';
import { useState } from 'react';
import { useCart } from './CartContext';
import signupimg from '../assests/icons8-user-64.png';
import signinimg from '../assests/icons8-login-48.png';
import historyimg from '../assests/icons8-history-64.png';

import { useNavigate } from "react-router";



function Navbar() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  
  const { cart } = useCart();


  const cartItemCount = cart.reduce((count, product) => count + product.quantity, 0);
  // // const cartItemCount = cart.length;

  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  const username = localStorage.getItem('userId');
  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("payment_status");

    navigate("/");
  };
  return(
    <div className='m-0'>
      
      <nav className="navbar navbar-expand-md p-0" >
        <div className='container-fluid pink'>
      <span className="navbar-brand justify-content-center">
      <svg className="bd-placeholder-img p-0" width="130px" height="78px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
          <image href={logoimg} alt='logo' width="100%"  className='p-0 justify-content-center'></image>
          </svg>
          </span>
     
      <button  className="navbar-toggler"  onClick={toggleNav} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " style={{ backgroundColor: 'white' }}>≡</span>
      </button>
        <div className={`my-3  collapse navbar-collapse overlay ${isNavOpen ? ' show' : ''}}`} id="navbarText" >
        <ul className="navbar-nav me-auto justify-content-center mb-md-0">
        <li className="nav-item active mx-2" ><Link className="nav-link" to="/" onClick={closeNav}>Home</Link></li>
        <li className="nav-item mx-2" ><Link className="nav-link" to="/sweet" onClick={closeNav}>Sweet</Link></li>
        <li className="nav-item mx-2" ><Link className="nav-link" to="/savory" onClick={closeNav}>Savory</Link></li>
        <li className="nav-item mx-2" ><Link className="nav-link" to="/hamper" onClick={closeNav}>Hamper</Link></li>
        
        </ul>
        <ul className="navbar-nav ml-auto justify-content-center mb-md-0">

          {isUserLoggedIn?
          (<>
          <li className="nav-item"><Link className="nav-link" to=''onClick={closeNav} ><figure className="text-center p-0 m-0"><img onClick={handleLogout} src={logoutimg} alt='Logout' width="30px" height="30px"/><figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>Log-out</figcaption></figure></Link></li>
          <li className="nav-item"><Link className="nav-link" to='/order-history'onClick={closeNav} ><figure className="text-center p-0 m-0"><img src={historyimg} alt='Logout' width="30px" height="30px"/><figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>Your Orders</figcaption></figure></Link></li>

          <li className="nav-item"><Link className="nav-link" to='' onClick={closeNav}><figure className="text-center p-0 m-0"><img src={userimg} alt='user' width="30px" height="30px" /><figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>{username}</figcaption></figure></Link></li></>)
          :( <>         
          <li className="nav-item"><Link className="nav-link" to='/register' onClick={closeNav}> <figure className="text-center p-0 m-0"><img className="img-fluid m-0 p-0" src={signupimg} alt='user' width="30px" height="30px"/> <figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>Sign-up</figcaption></figure></Link></li>
          <li className="nav-item"><Link className="nav-link" to='/login' onClick={closeNav}><figure className="text-center p-0 m-0"><img src={signinimg} alt='user' width="30px" height="30px" /><figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>Login</figcaption></figure></Link></li>
         </> )}
          <li className="nav-item"><Link className="nav-link" to='/cart' onClick={closeNav}><figure className="text-center p-0 m-0"><img src={cartimg} alt='Cart' width="30px" height="30px" /><span className="cart-count rounded-circle bg-danger small px-1 text-white">{cartItemCount}</span><figcaption className="text m-0 p-0" style={{ fontSize: '12px' }}>Cart</figcaption></figure></Link></li>
          
        </ul>
        
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
