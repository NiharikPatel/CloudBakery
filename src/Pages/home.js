import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bakeryImage1 from '../assests/bakery1.jpg';
import bakeryImage2 from '../assests/bakery2.jpg';
import bakeryImage3 from '../assests/bakery3.jpg';

function Home() {
  return (
    <div className='m-0 p-0'>
    <div id="myCarousel" className="carousel slide m-0 p-0" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner m-0 p-0">
      <div className="carousel-item active">
    <svg className="bd-placeholder-img px-0" width="100%" height="80vh" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={bakeryImage1} width="100%" className="d-block w-100 py-0"></image>
        </svg>
      
          <div style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgb(0, 0, 0)'}}className="carousel-caption text-start position-absolute top-50 start-50 translate-middle">
            <h1>Cloud Bakery</h1>
            <p >Welcome to Cloudbakery, where the warmth of freshly baked delights meets the aroma of happiness!  Join us on a journey of irresistible flavors and sensory delights that are sure to make your every visit a memorable experience</p>
          </div>
        
      </div>'
      <div  className="carousel-item ">
        <svg className="bd-placeholder-img" width="100%" height="80vh" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={bakeryImage2} width="100%" className="d-block w-100"></image>
        </svg>
       
          <div style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgb(0, 0, 0)'}} className="carousel-caption text-start position-absolute top-50 start-50 translate-middle">
          <h1>Cloud Bakery</h1>
            <p>we don't just bake; we create moments of joy, one delicious treat at a time. Indulge in the extraordinary; savor the extraordinary – because here, every day is a celebration of the extraordinary in every bite!</p>
          </div>
    
      </div>
      <div className="carousel-item ">
        <svg className="bd-placeholder-img" width="100%" height="80vh" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={bakeryImage3} width="100%"  className="d-block w-100" ></image>
        </svg>
        
          <div style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgb(0, 0, 0)'}} className="carousel-caption text-start position-absolute top-50 start-50 translate-middle">
          <h1>Cloud Bakery</h1>
            <p>where the enticing aroma of freshly baked delights mingles with the artistry of curated hampers, creating a symphony of flavors and elegance. Our passion for crafting unforgettable moments extends beyond our ovens, as we bring you meticulously designed hampers that redefine the essence of gifting. Each hamper is a masterpiece, blending the finest handcrafted treats from our bakery with a touch of sophistication and a dash of delight. </p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" type="button" href="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Previos</span> */}
    </a>
    <a className="carousel-control-next" type="button" href="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Next</span> */}
    </a>
    
  </div>
  </div>
  );
}

export default Home
