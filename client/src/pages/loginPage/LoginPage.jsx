import React from 'react'
import './loginPage.css'
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
      // 👇️ navigate to /contacts
      navigate('/homepage');
    };

  return (
    <div className='wrapper'>
      <div className='from-box login'>
        <form action=''>
          <h1>Login</h1>

          <div className='input-box'>
            <input type='text' placeholder='Email' required/>
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required/>
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label>
              <input type='checkbox'/>
              Remember me
            </label>
            <a href='/#'>Forgot passworrd?</a>
          </div>

          <button type='submit' onClick={navigateToHome}>Login</button>

          <div className="signup-link">
            <p>Don't have an account? <a href='/signup'>Sign Up</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginPage
