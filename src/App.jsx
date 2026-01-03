import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { LoginPage, AdminDashboardPage, StudentDashboardPage, TeacherDashboardPage, } from "./Page"
import {AdminLoader, StudentLoader, TeacherLoader} from "./Loaders/index"
import { Suspense, lazy } from "react"
import Loading from "./components/Loading/Loading"
import { TeacherManagement, AdminDashboard } from "./components"
import FeesDashboard from "./components/Admin/Fees/FeesDashboard/FeesDashboard"


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
                    
                    HydrateFallback:Loading,
                    children:[
                        {
                            path: "",
                            element: <AdminDashboard/>
                        },
                        {
                            path: "teacherManagement",
                            element: <TeacherManagement/>
                        },
                        {
                            path: "feesManagement",
                            element: <FeesDashboard/>
                        },
                    ]
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
            path: "/*",
            element: <div className="w-full h-screen fixed text-2xl text-black grid place-content-center">Error 404, Page Not Found</div>
        }
    ])

    return(
       <RouterProvider router={router}/>
    )
}