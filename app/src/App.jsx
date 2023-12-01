import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link, redirect, createRoutesFromElements, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'

import 'react-toastify/dist/ReactToastify.css';

import './styles/index.scss'
const Home = lazy(() => import('./pages/home/Home'));
const Register = lazy(() => import('./pages/register/Register'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Defaultlayout = lazy(() => import('./components/Defaultlayout'));
const Login = lazy(() => import('./pages/login/Login'));
const Userlayout = lazy(() => import('./components/Userlayout'));
const TemplateLayout = lazy(() => import('./pages/ResumeLayout/TemplateLayout'));
const CreateResume = lazy(() => import('./pages/createResume/CreateResume'));


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Defaultlayout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/user' element={<Userlayout auth={true} />} >
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/templates' element={<TemplateLayout />} />
          <Route path='/user/create/:tempID' element={<CreateResume />} />
          <Route path='/user/edit/:resumeID' element={<CreateResume />} />
        </Route>
      </>
    )
  )

  return (
    <Suspense fallback={<div className='container'>Loading..</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
