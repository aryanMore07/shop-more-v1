import React, { useEffect, useState } from 'react';
import './signupPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswordName] = useState('');

  const signUpHandler = async () => {
    try {
      const response = await axios.post('/api/auth/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });
      console.log(response);
      console.log(response.request.requestBody);
      localStorage.setItem('token', response.data.encodedToken)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='signup-div'>
      <div className="signup-main-div">
        <h1>Signup</h1>
        <div className='input-div'>
          <label htmlFor="firstName">
            <p>FirstName</p>
            <input placeholder='Enter First Name' className='user-input' type="text" id='firstName' onChange={(event) => {
              setFirstName(event.target.value);
            }} />
          </label>
          <label htmlFor="lastName">
            <p>Last Name</p>
            <input placeholder='Enter Last Name' className='user-input' type="text" id='lastName' onChange={(event) => {
              setLastName(event.target.value)
            }} />
          </label>
          <label htmlFor="email">
            <p>Email Address</p>
            <input placeholder='Enter email' className='user-input' type="email" id='email' onChange={(event) => {
              setEmail(event.target.value);
            }} />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input placeholder='Enter password' className='user-input' type="password" id='password' onChange={(event) => {
              setPasswordName(event.target.value);
            }} />
          </label>
          {/* <div>
            <label htmlFor="termsAndConditions">
              <input className='checkbox-input' type="checkbox" name="terms" id="termsAndConditions" />
              I  accept all the terms and conditions
            </label>

          </div> */}
          <button className='signup-btn' onClick={signUpHandler}>signup</button>
          <Link className='link-tag' to='/login'>Already have an account {'>'}</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
