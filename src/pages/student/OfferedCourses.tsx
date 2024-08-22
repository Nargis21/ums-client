import { useGetAllStudentOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement";

const OfferedCourses = () => {
    const { data: offeredCourseData } = useGetAllStudentOfferedCoursesQuery(undefined)

    const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
        const key = item.course.title
        acc[key] = acc[key] || { courseTitle: key, sections: [] };
        acc[key].sections.push({ section: item.section, _id: item._id })
        return acc
    }, {})

    console.log(Object.values(singleObject ? singleObject : {}));

    return (
        <div>
            Offered Course
        </div>
    );
};

export default OfferedCourses;


// [
//   { course: { title: 'React' }, section: 1, _id: '45345' },
//   { course: { title: 'React' }, section: 2, _id: '45345' },
//   { course: { title: 'Redux' }, section: 1, _id: '45345' },
// ];

// [
//   {
//     courseTitle: 'React',
//     sections: [
//       { section: 1, _id: 'ADFa4345' },
//       { section: 2, _id: 'ADFa4345' },
//     ],
//   },
//   {
//     courseTitle: 'Redux',
//     sections: [{ section: 1, _id: 'ADFa4345' }],
//   },
// ];