import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children :[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>

      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'User/:userId',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router}/>
  </StrictMode>,
)
