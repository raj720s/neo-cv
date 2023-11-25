import React, {useState} from 'react'
import ResumeTemplateCard from './ResumeTemplateCard'
import './resumelayout.scss'
// import {useDispatch} from 'react-redux'
import {templateImagesPaths} from '../../utils/data'
import {Link} from 'react-router-dom'

function TemplateLayout() {
  const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver') //this state is used to display 'useTemplate' button when user hovers over the template

  // const dispatch = useDispatch()
  return (
    <div className='layouts-sresume'>
      <div className='container px-4 py-5' id='custom-cards'>
        <h2 className='pb-2'> Select a Template to get Started</h2>
        <p className='pb-2 border-bottom'>Impress potential employers with a compelling resume template.</p>

        {/*
        <div className='template-card-container container d-flex  '>
          <ResumeTemplateCard />
          <ResumeTemplateCard />
        </div>
        */}

        <div className='container' style={{color: '#1f4287'}}>
          <div className='row'>
            {templateImagesPaths.map((currentTemplate) => {
              return (
                <div className='col col-lg-4 col-md-6  col-12 mt-5' key={currentTemplate.id}>
                  <div
                    style={{position: 'relative'}}
                    onMouseOver={() => {
                      //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                      setIsMouseOver(currentTemplate.name)
                    }}
                    onMouseOut={() => {
                      //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                      setIsMouseOver('MouseIsNotOver')
                    }}
                  >
                    <div className='w-100 d-flex justify-content-center'>
                      <h3>{currentTemplate.name}</h3>
                    </div>
                    <img className='w-100 image-aspect-ratio' src={currentTemplate.imageSource} alt='template' />
                    {isMouseOver === currentTemplate.name ? ( //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                      <button
                        className='btn btn-secondary'
                        style={{position: 'absolute', top: '50%', right: '30%'}}
                        // onClick={() => {
                        //   // dispatch(
                        //   //   updateState({
                        //   //     //this dispatch function is used to update value of 'selectedTemplate' with the targetedTemplate in dataStoreSlice.js//
                        //   //     key: 'selectedTemplate',
                        //   //     value: currentTemplate.name,
                        //   //   })
                        //   // )
                        // }}
                      >
                        {/* Use Template */}
                        <Link className='text-decoration-none text-white' to={`/user/add/template/${currentTemplate.id}`}>
                          Use Template
                        </Link>
                      </button>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateLayout
