import React from 'react'
import Headernav from './header/Headernav'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import '../styles/index.scss'

function Userlayout() {
  return (
    <div className='layout-default'>
      <Headernav auth={true} />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Userlayout
