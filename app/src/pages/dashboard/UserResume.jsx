import React from 'react'
import './dashboard.scss'
import ResumeCard from './DashboardResumeCard'
function UserResume(props) {
  return (
    <div className='resume-card-container'>
      <ResumeCard />
      <ResumeCard />
    </div>
  )
}

export default UserResume
