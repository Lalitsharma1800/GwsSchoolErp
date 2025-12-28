import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { LoginPage, AdminDashboardPage, StudentDashboardPage, TeacherDashboardPage } from "./Page"
import {AdminLoader, StudentLoader, TeacherLoader} from "./Loaders/index"




export default function App(){


    const router = createBrowserRouter([
        {
            path: "/",
            children:[
                {
                    path: "",
                    element:<LoginPage/>
                },
                {
                    path: "/admin",
                    element: <AdminDashboardPage/>,
                    loader: AdminLoader
                },
                {
                    path: "/student",
                    element: <StudentDashboardPage/>,
                    loader: StudentLoader
                },
                {
                    path: "/teacher",
                    element: <TeacherDashboardPage/>,
                    loader: TeacherLoader
                },
                {
                    hydrateFallbackElement: <div>Loading...</div>
                }
                

            ]
        }
    ])

    return(
       <RouterProvider router={router}/>
    )
}