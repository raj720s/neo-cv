import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'

import './styles/index.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Defaultlayout from './components/Defaultlayout'
import Login from './pages/login/Login'

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
      element: <Dashboard />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
