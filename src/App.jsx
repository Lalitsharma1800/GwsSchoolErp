import { useState } from 'react'
import ERPLandingPage from './Components/ERP/ERPLandingPage/ERPLandingPage'
import {Link, NavLink, createBrowserRouter, RouterProvider} from 'react-router-dom'

import ERPFooter from './Components/ERP/ERPFooter/ERPFooter'
import ERPLoginPage from './Components/ERP/ERPLoginPage/ERPLoginPage'

function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <ERPLandingPage />
      },
     {
        path:"/ERPLoginPage",
        element: <ERPLoginPage />
     }
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
