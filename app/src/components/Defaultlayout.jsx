import React from 'react'
import Headernav from './header/Headernav'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import '../styles/index.scss'
import Home from '../pages/home/Home'
import { ToastContainer } from 'react-toastify';
function Defaultlayout(props) {
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

export default Defaultlayout
