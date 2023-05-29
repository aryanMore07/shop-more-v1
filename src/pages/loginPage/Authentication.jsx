import React from 'react';
import './loginComponent.css';
import './signupComponent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';
import { toast } from 'react-toastify';

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
        toast.success('Login successful', {
          position: "top-center",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      localStorage.setItem('token', response.data.encodedToken)
      dispatch({ type: 'UPDATE_USERS_LOGIN', payload: response.data.foundUser });
      navigate(location?.state?.from?.pathname || '/');


    } catch (error) {
      console.log(error);
      if(error.response.status === 401) {
        toast.error('Please enter valid credentials', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if(error.response.status === 404) {
        toast.error('Entered credentials not found. Please signup first! ', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  }

  // For signup component

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswordName] = useState('');

  const signUpHandler = async () => {
    try {
      if(firstName && lastName && email && password) {
        const response = await axios.post('/api/auth/signup', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        });
        if(response.status === 200) {
          toast.success('Signup successful', {
            position: "top-center",
            autoClose: 750,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        setLoginComponent(loginComponent => !loginComponent)
        localStorage.setItem('token', response.data.encodedToken)
      } else {
        
        toast.warn('Please input all fields', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 422) {
        toast.error('Email already exist', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        toast.error('Something went wrong try again later', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
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
                <span><p>Email Address</p></span>
                <input placeholder='Enter email' className='user-input' type="email" id='email' onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} />
              </label>
              <label htmlFor="password">
                <span><p>Password</p></span>
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
                <span><p>FirstName</p></span>
                <input placeholder='Enter First Name' className='user-input' type="text" id='firstName' onChange={(event) => {
                  setFirstName(event.target.value);
                }} />
              </label>
              <label htmlFor="lastName">
                <span><p>Last Name</p></span>
                <input placeholder='Enter Last Name' className='user-input' type="text" id='lastName' onChange={(event) => {
                  setLastName(event.target.value)
                }} />
              </label>
              <label htmlFor="email">
                <span><p>Email Address</p></span>
                <input placeholder='Enter email' className='user-input' type="email" id='email' onChange={(event) => {
                  setEmail(event.target.value);
                }} />
              </label>
              <label htmlFor="password">
                <span><p>Password</p></span>
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
