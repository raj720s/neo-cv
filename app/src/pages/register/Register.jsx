import React, { useState } from 'react'
import './register.scss'
import { Button } from 'react-bootstrap'
import axiosIntance from '../../utils/Axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    axiosIntance.post('/auth/register', {
      email: email, password: password, name: name, phone: phone
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      navigate('/user/dashboard')
    }).catch(e => {
      setError(e.message || e || 'register error')
      toast.error(e.message || 'login failed', {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
  }
  return (
    <div className='login-container'>
      <div className='text-center'>
        <form className='form-signin' onSubmit={handleRegister}>
          <i className='fa-solid fa-user' style={{ color: '#eeeeec', fontSize: '5rem' }}></i>
          <h1 className='h3 mb-3 font-weight-normal'>Register</h1>
          <label className='sr-only' htmlFor='name'>
            User Name
          </label>
          <input type='text' id='inputName' className='form-control' placeholder='user name' required autoFocus onChange={(e) => setname(e.target.value)} />
          <label className='sr-only' htmlFor='email'>
            Email address
          </label>
          <input onChange={e => setEmail(e.target.value)} type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus />
          <label className='sr-only' htmlFor='phone'>
            Contact Number
          </label>
          <input type='number' id='inputNumber' className='form-control' placeholder='phone' autoFocus onChange={e => setphone(e.target.value)} />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' required onChange={e => setPassword(e.target.value)} />
          <button className='btn btn-lg btn-primary btn-block' type='submit'>
            Register
          </button>
        </form>
        <div className='auth-container'>
          <p>or</p>
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

export default Register
