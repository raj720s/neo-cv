import React from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './nav.scss'

export default function Headernav(props) {
  return (
    <Navbar className='navbar' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='navbar-brand'>
            Neo_CV
          </Link>
        </Navbar.Brand>
        {props.auth ? (
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link to={'/login'} className='nav-link'>
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/register'} className='nav-link'>
                Register
              </Link>
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}
