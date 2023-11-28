import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import bimage from '../assests/bgsign.jpg';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/auth";
      const response = await axios.post(url, data);

      console.log(response);
      const { userId, token } = response.data;

      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      localStorage.setItem("isUserLoggedIn", "true");
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="row d-flex justify-content-center h-auto" style={{ backgroundImage: `url(${bimage})`, backgroundSize: 'cover', minHeight: '80vh' }}>
   
    <div className="justify-content-center text-center my-4  h-50 bg-light rounded"  style={{
          opacity: 0.9, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", border:"4px solid pink"}}>
       
          <form className="bg-light p-4" onSubmit={handleSubmit}>
            <h5 className="mb-4">Login to Your Account</h5>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="form-control"
              />
            </div>
            {error && <div className="text-danger mb-3">{error}</div>}
            <button type="submit" className="btn btn-success">
              Sign In
            </button>
          </form>
      
          <div className="my-2">
          <p>Not registered? <Link to="/signup"> Sign Up</Link></p>
          </div>
          </div>
      </div>
    
  );
};

export default Login;
