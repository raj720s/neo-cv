import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

import './styles/index.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Defaultlayout from './components/Defaultlayout'
import Login from './pages/login/Login'
import Userlayout from './components/Userlayout'
import Editor from './pages/editor/Editor'
import ResumeLayout from './pages/ResumeLayout/TemplateLayout'
import Fof from './pages/Fof'
import TemplateLayout from './pages/ResumeLayout/TemplateLayout'
import ResumeCreate from './pages/createResume/ResumeCreate'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Defaultlayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    // the above layout willnnot work for this  login route now
    {
      path: '/user/dashboard',
      element: <Userlayout />,
      children: [
        {
          path: '/user/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/user/dashboard/templates',
          element: <TemplateLayout />,
        },
        // {
        //   path: '/user/dashboard/add/template/:tempID',
        //   element: <Register />,
        // },
      ],
    },
    {
      path: '/user/add/template/:tempID',
      element: <Userlayout />,
      children: [
        {
          path: '/user/add/template/:tempID',
          element: <ResumeCreate />,
        },
      ],
    },

    {
      path: '*',
      element: <Fof />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
