import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { LoginPage, AdminDashboardPage, StudentDashboardPage, TeacherDashboardPage } from "./Page"
import {AdminLoader, StudentLoader, TeacherLoader} from "./Loaders/index"
import { Suspense } from "react"
import Loading from "./components/Loading/Loading"




export default function App(){


    const router = createBrowserRouter([
        {
            path: "/",
            children:[
                {
                    path: "",
                    element:<LoginPage/>,
                    HydrateFallback:Loading
                },
                {
                    path: "/admin",
                    element: <Suspense fallback ={<Loading/>}><AdminDashboardPage/></Suspense>,
                    loader: AdminLoader,
                    HydrateFallback:Loading
                },
                {
                    path: "/student",
                    element:<Suspense fallback ={<Loading/>}><StudentDashboardPage/></Suspense>,
                    loader: StudentLoader,
                    HydrateFallback:Loading
                },
                {
                    path: "/teacher",
                    element: <Suspense fallback ={<Loading/>}><TeacherDashboardPage/></Suspense>,
                    loader: TeacherLoader,
                    HydrateFallback:Loading
                },
            ]
        },
        {
                    hydrateFallbackElement: <div>Loading...</div>
        }
    ])

    return(
       <RouterProvider router={router}/>
    )
}