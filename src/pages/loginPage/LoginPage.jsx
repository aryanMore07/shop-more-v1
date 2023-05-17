import React from 'react';
import './loginpage.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-div'>
      <div className="login-main-div">
        <h1>Login</h1>
        <div className='input-div'>
          <label htmlFor="email">
            <p>Email Address</p>
            <input placeholder='Enter email' className='user-input' type="email" id='email' />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input placeholder='Enter password' className='user-input' type="password" id='password' />
          </label>
          <button className='login-btn'>Login</button>
          <Link className='link-tag' to='/signup'>Create an account {'>'}</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
