import React from 'react'
import './home.scss'
import {Link} from 'react-router-dom'
import Album from './Album'
function Home() {
  return (
    <div>
      <main role='main'>
        <section className='jumbotron text-center  d-flex flex-column justify-content-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'>Neo CV Builder</h1>
            <p className='text'>Experience the world's fastest cv builder and get Hired. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla quod ratione, odio voluptatem perspiciatis !</p>
            <p>
              <Link to={'/register'} className='btn btn-primary my-2'>
                Let's get Started
              </Link>
            </p>
          </div>
        </section>

        <Album />
      </main>
    </div>
  )
}

export default Home
