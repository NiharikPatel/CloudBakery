
import React from 'react';
import { useCart } from './CartContext';
import {loadStripe} from '@stripe/stripe-js';

function Cart() {
    const {cart, dispatch} = useCart();

    const decreaseQuantity = (productId) =>{
      dispatch({type:'DECREASE_QUANTITY', id:productId });
    };
    const increaseQuantity = (productId) =>{
      dispatch({type:'INCREASE_QUANTITY', id:productId });
    };
    const totalPrice = cart.reduce((total, product)=>total + product.price * product.quantity, 0);

    
    const makePayment = async() =>{
      const stripe = await loadStripe("pk_test_51OAS4HSEYgtTeDDcaeJq7Tioph41yStg08LVLyjmLv1kkR6CaoTPYQxXIoilSxuPNf9OXLfjHR9ZhPeuPWwjOmfL00BErPAQiG");
     
      const body={
        item: cart,
        userId: localStorage.getItem('userId'),
      }
      const headers = {
        "Content-Type":"application/json",
       
      }
      const response = await fetch("http://localhost:3001/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
      })
      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId:session.id
      });
      if(result.error){
        console.log(result.error)
      }
    }
    
  return (
    <div className='m-2 p-2'>
      <h4>Your Cart</h4>
     
        {cart.length ===0 ?(<p>your cart is empty</p>):(
        cart.map((product)=>(
            <div key= {product.id} className='custom-card '>
              
                <div className='custom-card-body row border m-3 '>
                <div className='col-2  d-none d-md-block'>
                <img src={product.imageURL} alt={product.name} width="100px" height="100px" />
                </div>
                <div className='col d-flex flex-column justify-content-between p-0'>
                <p>Product : {product.name}</p>
                
                <p>Total Price : Rs. {product.price} X {product.quantity}</p>
                <p>
                  Quantity : <button className="btn btn-info" onClick={()=>decreaseQuantity(product.id)}> - </button> {product.quantity} <button className="btn btn-info" onClick={()=>increaseQuantity(product.id)}> + </button>
               
                </p>
                </div>
               
                </div>

            </div>
        ))
        )}
      
        
            <div className='custom-card-body m-3 border d-flex justify-content-end p-2  pink text-primary'>
            <div >
          <p>
            Order Quantity: {cart.reduce((total, product) => total + product.quantity, 0)}
          </p>
          <p>Total Price: Rs. {totalPrice}</p>
          <button className="btn btn-success" onClick={makePayment}>Place Order</button>
          </div>
          </div>
    </div>
  );
}

export default Cart;
