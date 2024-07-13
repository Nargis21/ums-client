import { Layout, Menu } from 'antd';
import { adminPaths } from '../../routes/adminRoutes';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { facultyPaths } from '../../routes/facultyRoutes';
import { studentPaths } from '../../routes/studentRoutes';
import { useAppSelector } from '../../redux/hook';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {

    const user = useAppSelector(selectCurrentUser)
    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;

        default:
            break;
    }


    return (
        <Sider
            style={{ height: "100vh", position: "sticky", top: '0', left: '0' }}
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{ color: "white", height: '4rem', display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;