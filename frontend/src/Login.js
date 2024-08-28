import React, { useState } from 'react'
import './Login.css'
import axios from 'axios' // to post the data 

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event){
    event.preventDefault();   // this will prevent default submission of form
    axios.post('http://localhost:8081/login', {email, password})  // to post the data to local host
    .then(res => console.log(res))
    .catch(err => console.log(err)); 
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' required
             onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <div className='password-container'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Enter password' required
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='toggle-password'
                onClick={PasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
