import React from 'react'
import './dashboard.scss'
import { ButtonGroup, Button } from 'react-bootstrap'
function ResumeCard() {
  return (
    <div className='container'>
      <div className='resume-card'>
        <div className='card mb-4 box-shadow'>
          <img className='card-img-top resume-image-preview' src='/resume_thumb.svg' alt='Card image cap' />
          <div className='card-body'>
            <div className='d-flex justify-content-center align-items-center'>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">preview</Button>
                <Button variant="secondary">Download</Button>
                <Button variant="secondary">Share</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
