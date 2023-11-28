import React from 'react'

function TemplateSection() {
    return (
        <div className='container' style={{ color: '#1f4287' }}>
            <div className='row'>

                <div className='col col-lg-4 col-md-6  col-12 mt-5' key={1}>
                    <div
                        style={{ position: 'relative' }}
                        onMouseOver={() => {
                            //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                            setIsMouseOver('temp 1')
                        }}
                        onMouseOut={() => {
                            //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                            setIsMouseOver('MouseIsNotOver')
                        }}
                    >
                        <div className='w-100 d-flex justify-content-center'>
                            <h3> template 1 </h3>
                        </div>
                        {/* <img className='w-100 image-aspect-ratio' src={currentTemplate.imageSource} alt='template' /> */}
                        {isMouseOver === currentTemplate.name ? ( //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                            <button
                                className='btn btn-secondary'
                                style={{ position: 'absolute', top: '50%', right: '30%' }}
                            >
                                {/* Use Template */}
                                <Link className='text-decoration-none text-white' to={`/user/create/${currentTemplate.id}`}>
                                    Use Template
                                </Link>
                            </button>
                        ) : null}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TemplateSection