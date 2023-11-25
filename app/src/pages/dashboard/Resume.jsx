import React from 'react'
import './dashboard.scss'
import ResumeCard from './ResumeCard'
function Resume(props) {
  return (
    <div className='resume-card-container'>
      <ResumeCard />
      <ResumeCard />
    </div>
  )
}

export default Resume
