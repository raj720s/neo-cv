import React, { useEffect, useState } from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './nav.scss'

export default function Headernav(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();
  // const token = localStorage.getItem('token')


  // setIsLoggedIn(true);

  // useEffect(() => {
  //   if (!token) {
  //     setIsLoggedIn(false);
  //     navigate('/')
  //   } else {
  //     setIsLoggedIn(true)
  //     navigate('/user/dashboard')
  //   }

  // }, [])
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <Navbar className='navbar' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='navbar-brand'>
            Neo_CV
          </Link>
        </Navbar.Brand>
        {isLoggedIn ? (
          <Nav className='ml-auto'>
            <NavLink onClick={logout}>
              Logout
            </NavLink>
          </Nav>
        ) : (
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
        )}
      </Container>
    </Navbar>
  )
}
