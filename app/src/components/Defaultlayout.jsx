import React, { useEffect } from 'react'
import Headernav from './header/Headernav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer/Footer'
import '../styles/index.scss'
import Home from '../pages/home/Home'
import { ToastContainer } from 'react-toastify';
function Defaultlayout(props) {
  const userToken = localStorage.getItem('token');
  const navigate = useNavigate()
  useEffect(() => {
    if (userToken) {
      navigate('/user/dashboard')
    }
  }, [userToken])
  console.log({ userToken })
  return (
    <div className='layout-default'>
      <Headernav />
      <div className='main-container'>
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Defaultlayout
