import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
// import Footer from './Components/footer';
import Sweet from './Pages/sweet';
import Savory from './Pages/savory';
import Hamper from './Pages/hamper';
import Home from './Pages/home';
import Footer from './Components/footer';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';
import Login from './Pages/loginpage';
import Signup from './Pages/registerpage';
import Success from './Pages/success';
import Fail from './Pages/fail';
import OrderHistory from './Components/History';
function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sweet' element={<Sweet />} />
        <Route path='/savory' element={<Savory />} />
        <Route path='/hamper' element={<Hamper />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Fail/>} />
        <Route path='/order-history' element={<OrderHistory/>} />
        </Routes>
        <Footer></Footer>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
