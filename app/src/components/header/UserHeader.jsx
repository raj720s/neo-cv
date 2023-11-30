

import React, { useEffect, useState } from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './nav.scss'
function UserHeader(props) {
    const navigate = useNavigate()
    const [token, setToken] = useState('')

    useEffect(() => {
        let userToken = localStorage.getItem('token')
        if (!userToken) {
            navigate('/login')
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

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <Navbar className='navbar' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand>
                    <Link to={'/user/dashboard'} className='navbar-brand'>
                        Neo_CV
                    </Link>
                </Navbar.Brand>

                <Nav className='ml-auto'>
                    <NavLink onClick={logout}>
                        Logout
                    </NavLink>
                </Nav>

            </Container>
        </Navbar>
    )

}

export default UserHeader