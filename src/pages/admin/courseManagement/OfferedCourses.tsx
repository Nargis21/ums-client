import { Button, Table, TableColumnsType } from "antd";
import { useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TOfferedCourse } from "../../../types/courseManagement.type";


const OfferedCourses = () => {

    // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: offeredCourseData, isFetching } = useGetAllOfferedCoursesQuery(undefined)

    const tableData = offeredCourseData?.data?.map(({ _id, academicSemester, academicFaculty, academicDepartment, course, faculty }) => ({
        key: _id, semester: `${academicSemester.name} ${academicSemester.year}`, faculty: `${academicFaculty.name}`, department: `${academicDepartment.name}`, course: `${course.title}`, mentor: `${faculty.fullName}`
    }))

    type TTableData = Pick<TOfferedCourse, 'academicSemester' | 'academicFaculty' | 'academicDepartment' | 'course' | 'faculty'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Semester',
            key: 'semester',
            dataIndex: 'semester',
        },
        {
            title: 'Faculty',
            key: 'faculty',
            dataIndex: 'faculty',
        },
        {
            title: 'Department',
            key: 'department',
            dataIndex: 'department',
        },
        {
            title: 'Course',
            key: 'course',
            dataIndex: 'course',
        },
        {
            title: 'Mentor',
            key: 'mentor',
            dataIndex: 'mentor',
        },
        {
            title: 'Action',
            key: 'X',
            render: () => {
                return <Button>Update</Button>
            }

        },
    ];

    // const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    //     if (extra.action === 'filter') {
    //         const queryParams: TQueryParams[] = []
    //         filters.Name?.forEach((item) => (
    //             queryParams.push({ name: 'name', value: item })
    //         ))
    //         setParams(queryParams)
    //     }
    // };

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
        // onChange={onChange}
        // showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default OfferedCourses;