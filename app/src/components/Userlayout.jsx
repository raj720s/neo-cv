import React from 'react'
import Headernav from './header/Headernav'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import '../styles/index.scss'
import { ToastContainer } from 'react-toastify'

function Userlayout(props) {
  return (
    <div className='layout-default'>
      <Headernav auth={props.auth} />
      <div className='main-container'>
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Userlayout
