import React from 'react';
import './signupPage.css';
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";

function SignupPage() {
  return (
    <div className='wrapper_signup'>
      <div className='from-box signup'>
        <form action=''>
          <h1>Sign UP</h1>

          <div className='input-box_signup'>
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='text' placeholder='Email' required/>
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='password' placeholder='Password' required/>
            <FaLock className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='password' placeholder='Role' required/>
            <FaUserGear className='icon' />
          </div>

          <div className="role_signup">
            <p>Role should be user, uploader or admin only</p>
          </div>

          
          <div className="remember-forgot_signup">
            <label>
              <input type='checkbox'/>
              I agree to the tearms and conditions
            </label>
          </div>

          <button type='submit'>Sign Up</button>

          <div className="signup-link_signup">
            <p>Already have an account? <a href='/#'>Login</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignupPage
