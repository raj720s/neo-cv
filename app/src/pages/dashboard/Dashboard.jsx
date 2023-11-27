import React from 'react'
import './dashboard.scss'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserResume from './UserResume'

function Dashboard(props) {
  // fetch list of already downloaded cvs and Templates
  // show as preview in my cvs sections
  // give option to download share edit and delete ..
  //-------------if not available --------//
  // show no cvs section and lets create ..

  return (
    <div className='dashboard-container'>
      <div className='intoduction-container h1'>Hi User</div>
      <div className='h3'>Select your resume.</div>
      <div className='resume-container'>
        <UserResume />
      </div>
      <span>or</span>
      <div className='create-new-btn mb-3'>

        <Link to={'/user/templates'} className='btn 
        btn-secondary text-white text-decoration-none'>
          Create New
        </Link>

      </div>
    </div>
  )
}

export default Dashboard
