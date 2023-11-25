import React from 'react'
import './resumelayout.scss'
const ResumeTemplateCard = () => {
  return (
    <div className='container resume-temp-container col-md-5 col-lg-6'>
      <div className='resume-content'>
        {/* Your resume content goes here */}
        <img src='/temp1.jpg' alt='templateimage' className='temp-image' />
        {/* ... Other sections of your resume */}
      </div>
    </div>
  )
}

export default ResumeTemplateCard
