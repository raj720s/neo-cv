import React, { useState } from 'react'
import './login.scss'
import { Button } from 'react-bootstrap'
import axiosIntance from '../../utils/Axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    axiosIntance.post('/auth/login', {
      email: email, password: password
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      navigate('/user/dashboard')
    }).catch(e => {
      setError(e.message || e)
      toast.error(e.message || 'login failed', {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
  }

  const google = () => {
    window.open("http://localhost:3500/api/auth/google/callback", "_self");
  };


  return (
    <div className='login-container'>
      <div className='text-center'>
        <form className='form-signin' onSubmit={handleLogin}>
          <i className='fa-solid fa-user' style={{ color: '#eeeeec', fontSize: '5rem' }}></i>
          <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
          <label className='sr-only' htmlFor='email'>
            Email address
          </label>
          <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus onChange={e => setEmail(e.target.value)} />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' required onChange={e => setPassword(e.target.value)} />
          <button className='btn btn-lg btn-primary btn-block' type='submit'>
            Sign in
          </button>
        </form>
        <p>or</p>
        <div className='auth-container'>
          <Button variant='danger ' onClick={google}>
            <i className='fa-brands fa-google'></i> Login with Google
          </Button>
          {/* <Button variant='primary ' onClick={googl}>
            <i className='fa-brands fa-facebook'></i> Login with Facebook
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default Login
