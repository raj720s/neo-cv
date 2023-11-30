import React, { useEffect, useState } from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './nav.scss'

export default function Headernav(props) {
  const navigate = useNavigate();

  const [token, setToken] = useState('')

  useEffect(() => {
    let userToken = localStorage.getItem('token')
    if (!userToken && props.auth) {
      console.log('token found', userToken)
      navigate('/login')
    }
    if (userToken && !props.auth) {
      setToken(userToken)
      navigate('/user/dashboard')
    }
  }, [token, props])


  // const token = localStorage.getItem('token')
  // setIsLoggedIn(true);

  // console.log('header props', props)
  // useEffect(() => {
  //   if (props.user) {
  //     navigate('/user/dashboard')
  //   }
  // }, [props.user])

  return (
    <Navbar className='navbar' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='navbar-brand'>
            Neo_CV
          </Link>
        </Navbar.Brand>

        <Nav className='ml-auto'>
          <NavLink>
            <Link to={'/login'} className='nav-link'>
              Login
            </Link>
          </NavLink>
          <NavLink>
            <Link to={'/register'} className='nav-link'>
              Register
            </Link>
          </NavLink>
        </Nav>

      </Container>
    </Navbar>
  )
}
