import React, {useState} from 'react';
import './signupPage.css';
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import axios from 'axios';

function SignupPage() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const [error, setError] = useState(false)

  const { username, email, password, role } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      res.data &&  window.location.replace('/login'); 
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div className='wrapper_signup'>
      <div className='from-box signup'>
        <form action=''>
          <h1>Sign UP</h1>

          <div className='input-box_signup'>
            <input type='text' placeholder='Username' name='username' value={username} onChange={onChange} required/>
            <FaUser className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='text' placeholder='Email' name='email' value={email} onChange={onChange} required/>
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} required/>
            <FaLock className='icon' />
          </div>
          <div className='input-box_signup'>
            <input type='text' placeholder='Role' name='role' value={role} onChange={onChange} required/>
            <FaUserGear className='icon' />
          </div>

          <div className="role_signup">
            <p>Role should be user, uploader or admin only</p>
          </div>

          
          <div className="remember-forgot_signup">
            <label>
              <input type='checkbox' required/>
              I agree to the tearms and conditions
            </label>
          </div>

          <button type='submit' onClick={onSubmit}>Sign Up</button>

          <div className="signup-link_signup">
            <p>Already have an account? <a href='/#'>Login</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignupPage
