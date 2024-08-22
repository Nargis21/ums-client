import { useGetAllStudentOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement";

const OfferedCourses = () => {
    const { data } = useGetAllStudentOfferedCoursesQuery(undefined)
    console.log(data);
    return (
        <div>
            Offered Course
        </div>
    );
};

export default OfferedCourses;