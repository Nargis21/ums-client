import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagement/OfferedCourses";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import Students from "../pages/admin/userManagement/Students";
import StudentUpdate from "../pages/admin/userManagement/StudentUpdate";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academic-semester',
                element: <CreateAcademicSemester />
            },
            {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester />
            },
            {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment />
            },
            {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment />
            },
            {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />
            },
            {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty />
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: 'Students',
                path: 'students',
                element: <Students />
            },
            {
                path: 'students/:studentId',
                element: <StudentDetails />
            },
            {
                path: 'students/update/:studentId',
                element: <StudentUpdate />
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
        ]
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Semester Registration',
                path: 'semester-registration',
                element: <SemesterRegistration />
            },
            {
                name: 'Registered Semesters',
                path: 'registered-semesters',
                element: <RegisteredSemesters />
            },
            {
                name: 'Create Course',
                path: 'create-course',
                element: <CreateCourse />
            },
            {
                name: 'Courses',
                path: 'courses',
                element: <Courses />
            },
            {
                name: 'Offer Course',
                path: 'offer-course',
                element: <OfferCourse />
            },
            {
                name: 'Offered Courses',
                path: 'offered-courses',
                element: <OfferedCourses />
            },
        ]
    }
]

//* programmatically sidebar items
// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {

//     if (item.name && item.path) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }

//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//             }))
//         })
//     }


//     return acc
// }, [])

//* programmatically routes
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])

//* Hard Coded Sidebar Items
// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
//     },
//     {
//         key: 'User Management',
//         label: 'User Management',
//         children: [
//             {
//                 key: 'Create Admin',
//                 label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>
//             },
//             {
//                 key: 'Create Student',
//                 label: <NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>
//             },
//             {
//                 key: 'Create Faculty',
//                 label: <NavLink to={'/admin/create-student'}>Create Student</NavLink>
//             },
//         ]
//     },
// ]


//* Hard Coded Routes
// export const adminRoutes = [
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
// ]