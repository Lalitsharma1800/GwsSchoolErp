import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from './features/login/loginLayout/LoginPage.jsx'

const routes = createBrowserRouter(
   
    createRoutesFromElements(
      <Route path='/' element={<LoginPage/>}></Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </StrictMode>,
)
