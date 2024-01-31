import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { Error } from './pages/error'
import { Register } from './pages/register'
import { Home } from './pages/home'
import './index.css'


const router = createBrowserRouter ([{
  
  path:"/",
  element:<App />,
  errorElement:<Error />,
  children: [
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/register",
      element:<Register />
    },
  ]

}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
