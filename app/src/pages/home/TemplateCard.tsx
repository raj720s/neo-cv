import React from 'react'
import './home.scss'
// Define the type for the props
interface MyComponentProps {
  price: number
  level: string
}
export default function TemplateCard(props: MyComponentProps) {
  return (
    <div className='col-md-4'>
      <div className='card mb-4 box-shadow'>
        <img className='card-img-top' src='/resume_thumb.svg' alt='Card image cap' />
        <div className='card-body'>
          <p className='card-text'>
            This template has highet selection rate for <strong>{props.level}</strong> level positions{' '}
          </p>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='btn-group'>
              <button type='button' className='btn btn-sm btn-outline-secondary'>
                Price <small className='text-muted'>{props.price}$</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
