import React, { useEffect, useState } from 'react'
import Headernav from './header/Headernav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer/Footer'
import '../styles/index.scss'
import Home from '../pages/home/Home'
import { ToastContainer } from 'react-toastify';
function Defaultlayout(props) {
  const navigate = useNavigate()
  const [token, setToken] = useState(false)
  useEffect(() => {
    let userToken = localStorage.getItem('token')
    if (userToken) {
      setToken(true)
      navigate('/user/dashboard')
    }
  }, [token, props])

  return (
    <div className='layout-default'>
      <Headernav auth={token} />
      <div className='main-container'>
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Defaultlayout
