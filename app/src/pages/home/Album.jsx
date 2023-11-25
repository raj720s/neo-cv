import React from 'react'
import './home.scss'
import TemplateCard from './TemplateCard'
export default function Album() {
  return (
    <>
      <div className='album py-5'>
        <div className='container'>
          <h2 className='text-center pb-5'>
            Select from the <strong>Top Shortlisted</strong> Templates
          </h2>
          <div className='flex gap-3 sm-flex-wrap'>
            <TemplateCard price={10} level='beginner' />
            <TemplateCard price={15} level='intermediate' />
            <TemplateCard price={20} level='expert' />
          </div>
        </div>
      </div>
    </>
  )
}
