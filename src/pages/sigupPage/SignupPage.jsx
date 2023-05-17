import React from 'react';
import './signupPage.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-div'>
      <div className="signup-main-div">
        <h1>Signup</h1>
        <div className='input-div'>
          <label htmlFor="email">
            <p>Email Address</p>
            <input placeholder='Enter email' className='user-input' type="email" id='email' />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input placeholder='Enter password' className='user-input' type="password" id='password' />
          </label>
          <div>
            <label htmlFor="termsAndConditions">
              <input className='checkbox-input' type="checkbox" name="terms" id="termsAndConditions" />
              I  accept all the terms and conditions
            </label>

          </div>
          <button className='signup-btn'>signup</button>
          <Link className='link-tag' to='/login'>Already have an account {'>'}</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
