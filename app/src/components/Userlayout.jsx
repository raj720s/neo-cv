import React from 'react'
import Headernav from './header/Headernav'
import Footer from './footer/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import '../styles/index.scss'
import { ToastContainer } from 'react-toastify'

function Userlayout(props) {
  if (!props.user) {
    <Navigate to={'/Login'} />
  }
  return (
    <div className='layout-default'>
      <Headernav user={props.user} />
      <div className='main-container'>
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Userlayout
