import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link, redirect, createRoutesFromElements } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

import './styles/index.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Defaultlayout from './components/Defaultlayout'
import Login from './pages/login/Login'
import Userlayout from './components/Userlayout'
// import Editor from './pages/editor/Editor'
import ResumeLayout from './pages/ResumeLayout/TemplateLayout'
import Fof from './pages/Fof'
import TemplateLayout from './pages/ResumeLayout/TemplateLayout'
import CreateResume from './pages/createResume/CreateResume'
import { useEffect, useState } from 'react'
// import { AuthProvider } from './utils/useAuth'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      setIsLoggedIn(true)
    }
  }, [userToken])
  console.log({ userToken })

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Defaultlayout user={userToken} />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/user' element={<Userlayout user={userToken} />} >
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/templates' element={<TemplateLayout />} />
          <Route path='/user/create/:tempID' element={<CreateResume />} />
        </Route>

      </>
    )
  )

  return (
    // <AuthProvider>
    <RouterProvider router={router} />
    // </AuthProvider>
  )
}

export default App
