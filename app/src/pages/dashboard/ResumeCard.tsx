import React from 'react'
import './dashboard.scss'
function ResumeCard() {
  return (
    <div className='container'>
      <div className='resume-card'>
        <div className='card mb-4 box-shadow'>
          <img className='card-img-top resume-image-preview' src='/resume_thumb.svg' alt='Card image cap' />
          <div className='card-body'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='btn-group'>
                <button type='button' className='btn btn-sm btn-outline-secondary'>
                  Share{' '}
                  <small>
                    <i className='fa-solid fa-share'></i>
                  </small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard
