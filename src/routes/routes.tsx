import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./adminRoutes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <ProtectedRoute role={'admin'}><App /></ProtectedRoute>,
        children: routesGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <ProtectedRoute role={'faculty'}><App /></ProtectedRoute>,
        children: routesGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <ProtectedRoute role={'student'}><App /></ProtectedRoute>,
        children: routesGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/change-password',
        element: <ChangePassword />
    },

])

export default router