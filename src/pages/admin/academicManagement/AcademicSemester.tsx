import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academinSemesterApi";

const AcademicSemester = () => {

    const { data } = useGetAllSemestersQuery(undefined)
    console.log(data);

    return (
        <div>
            Academic semester
        </div>
    );
};

export default AcademicSemester;