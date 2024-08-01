import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement";

const StudentDetails = () => {
    const { studentId } = useParams()
    const { data } = useGetSingleStudentQuery(studentId)
    console.log(data);
    return (
        <div>
            Student Details : {data?.data?.fullName}
        </div>
    );
};

export default StudentDetails;