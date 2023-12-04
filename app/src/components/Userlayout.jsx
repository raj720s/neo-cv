import React, { useEffect } from 'react'
import Headernav from './header/Headernav'
import Footer from './footer/Footer'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import '../styles/index.scss'
import { ToastContainer } from 'react-toastify'
import UserHeader from './header/UserHeader'
import { useAuth0 } from '@auth0/auth0-react'
function Userlayout(props) {
  // if (!props.user) {
  //   <Navigate to={'/Login'} />
  // }
  const navigate = useNavigate()

  const { user, loginWithRedirect, isAuthenticated } = useAuth0()

  console.log({
    user, isAuthenticated
  })
  useEffect(() => {
    if (isAuthenticated) {
      // psw-less login 
      const data = {
        email: user.email,
      }
      axiosIntance.post('/auth/user-login', data).then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        return navigate('/user/dashboard')
      }).catch(e => {
        toast.error(e.message || 'login failed', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
    }
  }, [isAuthenticated])

  return (
    <div className='layout-default'>
      <UserHeader auth={true} />
      <div className='main-container'>
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Userlayout
