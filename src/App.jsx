import { useState } from 'react'
import {LoginPage} from './features/login/LoginPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <LoginPage />
      },
     {
      path:"/Developer",
      element: <Developer/>
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
