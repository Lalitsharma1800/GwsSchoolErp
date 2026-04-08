import lazy_teacher_parent from "@/Lazy/teacher/lazy_teacher";
import { FallBack } from "@/components";
import { TeacherDashboard } from "@/components";

export const Teacher_dashoard_route = {
    path: "/teacher",
    lazy: lazy_teacher_parent,
    hydrateFallbackElement: <FallBack/>,
    children: [
            {
            path:"",
            Component: TeacherDashboard
            }

    ]
}
