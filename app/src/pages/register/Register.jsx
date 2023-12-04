import { useState } from 'react'
import './register.scss'
import { Button } from 'react-bootstrap'

// import { FormGroup, FormLabel, FormControl, Alert } from 'react-bootstrap';
import RegisterFormik from './RegisterFormik';
function Register() {

    return (
        <div className='login-container'>
            <RegisterFormik />
            {/* <div className='auth-container'>
                <p>or</p>
                <Button variant='danger '>
                    <i className='fa-brands fa-google'></i> Login with Google
                </Button>
                <Button variant='primary '>
                    <i className='fa-brands fa-facebook'></i> Login with Facebook
                </Button>
            </div> */}
        </div>

    )
}

export default Register