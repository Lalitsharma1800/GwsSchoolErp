import { useState } from 'react'
import LoginPage from './features/login/loginLayout/LoginPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <LoginPage/>
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
