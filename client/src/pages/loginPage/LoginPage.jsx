import React, {useState} from 'react'
import './loginPage.css'
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);// Store token in localStorage 
      alert("You have logged in successfully");
      navigate('/homepage'); // Navigate to homepage on successful login*/
    } catch (err) {
      console.error(err.response.data);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className='wrapper'>
      <div className='from-box login'>
        <form action=''>
          <h1>Login</h1>

          <div className='input-box'>
            <input type='text' placeholder='Email' name='email' value={email} onChange={onChange} required/>
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} required/>
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label>
              <input type='checkbox'/>
              Remember me
            </label>
            <a href='/signup'>Forgot passworrd?</a>
          </div>

          <button type='submit' onClick={onSubmit}>Login</button>

          <div className="signup-link">
            <p>Don't have an account? <a href='/signup'>Sign Up</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginPage
