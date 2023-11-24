import React from 'react'
import Headernav from './header/Headernav'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'
import '../styles/index.scss'
import Home from '../pages/home/Home'
function Defaultlayout() {
  return (
    <div className='layout-default'>
      <Headernav />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Defaultlayout
