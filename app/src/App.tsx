import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'

import './styles/index.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Defaultlayout from './components/Defaultlayout'
import Login from './pages/login/Login'
import Userlayout from './components/Userlayout'
import Editor from './pages/editor/Editor'
import ResumeLayout from './pages/ResumeLayout/ResumeLayout'

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
      path: '/dashboard',
      element: <Userlayout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/dashboard/layout',
          element: <ResumeLayout />,
        },
        // {
        //   path: '/register',
        //   element: <Register />,
        // },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
