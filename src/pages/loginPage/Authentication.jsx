import React from 'react';
import './loginComponent.css';
import './signupComponent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';

const Authentication = () => {

  const [loginComponent, setLoginComponent] = useState(false);
  // For Login Component

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(FilteredDataContext);
  const loginHandler = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        email: loginEmail,
        password: loginPassword
      })
      if(response.status === 200) {
        alert('Login successful');
      }
      dispatch({ type: 'UPDATE_USERS_LOGIN', payload: response.data.foundUser });
      navigate(location?.state?.from?.pathname)


    } catch (error) {
      console.log(error);
    }
  }

  // For signup component

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
      if(response.status === 200) {
        alert('Signup successful');
      }
      setLoginComponent(loginComponent => !loginComponent)
      localStorage.setItem('token', response.data.encodedToken)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      {
        loginComponent ? (<div className='login-div'>
          <div className="login-main-div">
            <h1>Login</h1>
            <div className='input-div'>
              <label htmlFor="email">
                <p>Email Address</p>
                <input placeholder='Enter email' className='user-input' type="email" id='email' onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} />
              </label>
              <label htmlFor="password">
                <p>Password</p>
                <input placeholder='Enter password' className='user-input' type="password" id='password' onChange={(event) => {
                  setLoginPassword(event.target.value)
                }} />
              </label>
              <button className='login-btn' onClick={loginHandler}>Login</button>
              <p className='link-tag' onClick={() => {
                setLoginComponent(loginComponent => !loginComponent)
              }}>Create an account {'>'}</p>
            </div>
          </div>
        </div>) : (<div className='signup-div'>
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
              <button className='signup-btn' onClick={signUpHandler}>signup</button>
              <p className='link-tag' onClick={() => {
                setLoginComponent(loginComponent => !loginComponent)
              }}>Already have an account {'>'}</p>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

export default Authentication;
