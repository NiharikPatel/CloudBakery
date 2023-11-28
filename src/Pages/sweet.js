import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from '../assests/productsdata.json';
import { useState, useEffect } from 'react';
import { useCart } from '../Components/CartContext';


function Sweet() {
  const {dispatch} = useCart();

  const addToCart = useCallback((product) => {
       dispatch({
       
      type: 'ADD_TO_CART',
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL:product.imageURL,
        
      },
    });},[dispatch]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
          setProducts(productData);
  
}, []);

const sweetProducts = products.filter((product) => product.product === "Sweet");
  return (
    <div className='row p-2 m-2'>
       <div className="card-columns" >
  {sweetProducts.map((product) => (
    
    <div className="card row" key={product.id}>
       
          
          <div className="card-body text-center">
           
              <h5 className="card-title">{product.name}</h5>
              {product.imageURL && (
              <img src={product.imageURL} alt={product.name} className="card-img-top"   style={{ width: '200px', height: '150px' }}/>
           
              )}
              <hr/>
              <p className="card-text">{product.description}.</p>
              <div className="d-flex justify-content-between">
              <div>
              <small className="ml">Rs {product.price}</small>
              </div>
                <div className="btn-group me">
                  <button type="button" className="btn btn-sm btn-primary" onClick={()=>addToCart(product)}>Add to cart</button>
                              
              </div>
            </div>
          </div>
          </div>

))}
 </div>
 
    </div>
  )
}

export default Sweet
