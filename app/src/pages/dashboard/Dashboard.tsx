import React from 'react'
import './dashboard.scss'
import {Button} from 'react-bootstrap'
import Resume from './Resume'
import {Link} from 'react-router-dom'

function Dashboard(props: any) {
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
        <Resume />
      </div>
      <span>or</span>
      <div className='create-new-btn mb-3'>
        <Button variant='secondary'>
          <Link to={'/dashboard/layout'} className='text-white text-decoration-none'>
            Create New
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
