import React from 'react'
import Headernav from './header/Headernav'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'
function Defaultlayout() {
  return (
    <div className='layout-default'>
      <Headernav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Defaultlayout
