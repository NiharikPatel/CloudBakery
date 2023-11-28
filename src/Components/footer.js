import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import fbicon from '../assests/icons-fb.png';
import instaicon from '../assests/icons-insta.png';
import mailicon from '../assests/icons-mail.png';


function Footer() {
  return (
    <div>
      
      <footer>
      {/* <ul className="nav justify-content-center border-bottom">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Features</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">About</Link></li>
    </ul> */}
    <div className="d-flex flex-wrap justify-content-between align-items-center border-top pink p-0 m-0">
  
    <p className="text-center text-body-secondary">© Copyright. all rights are reserved</p>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">Follow and contact us -
      <li className="ms-3"><Link className="text-body-secondary" to="/"><svg className="bi" width="30" height="30"><image href={instaicon} alt='logo' width="100%"  className='p-0 justify-content-center'></image></svg></Link></li>
      <li className="ms-3"><Link className="text-body-secondary" to="/"><svg className="bi" width="30" height="30"><image href={fbicon} alt='logo' width="100%"  className='p-0 justify-content-center'></image></svg></Link></li>
      <li className="ms-3"><Link className="text-body-secondary" to="/"><svg className="bi" width="30" height="30"><image href={mailicon} alt='logo' width="100%"  className='p-0 justify-content-center'></image></svg></Link></li>
    </ul>
    </div>
  </footer>
          
    </div>
  )
}

export default Footer
