import React from 'react'
import {Link} from 'react-router-dom'

import './Fof.scss'
function Fof() {
  return (
    <div className='not-found'>
      <img src='/404.svg' alt='Vector Image 1' />
      <p>Oops! It looks like the page you are looking for does not exist.</p>
      <Link to='/'>Go back to the homepage</Link>
    </div>
  )
}

export default Fof
