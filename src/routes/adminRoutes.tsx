import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

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
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
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