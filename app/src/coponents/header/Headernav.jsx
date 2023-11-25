import React from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './nav.scss'

export default function Headernav() {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='navbar-brand'>
            Neo_CV
          </Link>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link>
            <Link to='#' className='nav-link'>
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={'/register'} className='nav-link'>
              Register
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
