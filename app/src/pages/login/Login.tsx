import React from 'react'
import './login.scss'
import {Button} from 'react-bootstrap'
function Login() {
  return (
    <div className='login-container'>
      <div className='text-center'>
        <form className='form-signin'>
          <i className='fa-solid fa-user' style={{color: '#eeeeec', fontSize: '5rem'}}></i>
          <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
          <label className='sr-only' htmlFor='email'>
            Email address
          </label>
          <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
          <button className='btn btn-lg btn-primary btn-block' type='submit'>
            Sign in
          </button>
        </form>
        <p>or</p>
        <div className='auth-container'>
          <Button variant='danger '>
            <i className='fa-brands fa-google'></i> Login with Google
          </Button>
          <Button variant='primary '>
            <i className='fa-brands fa-facebook'></i> Login with Facebook
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
