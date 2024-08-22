import { Button, Col, Row } from "antd";
import { useEnrollCourseMutation, useGetAllStudentOfferedCoursesQuery } from "../../redux/features/student/studentCourseManagement";

type TCourse = {
    [index: string]: any
}

const OfferedCourses = () => {
    const { data: offeredCourseData } = useGetAllStudentOfferedCoursesQuery(undefined)
    const [enrollCourse] = useEnrollCourseMutation()
    const singleObject = offeredCourseData?.data?.reduce((acc: TCourse, item) => {
        const key = item.course.title
        acc[key] = acc[key] || { courseTitle: key, sections: [] };
        acc[key].sections.push({ section: item.section, _id: item._id })
        return acc
    }, {})

    const modifiedData = Object.values(singleObject ? singleObject : {});

    const handleEnroll = async (id: string) => {
        const enrollData = {
            offeredCourse: id
        }

        const res = await enrollCourse(enrollData)
        console.log(res);
    }

    return (
        <Row gutter={[0, 20]}>
            {modifiedData?.map((item) => {
                return (
                    <Col span={24} style={{ border: 'solid #d4d4d4 2px' }}>
                        <div style={{ padding: '10px' }}>
                            <h2>{item.courseTitle}</h2>
                        </div>
                        <div>
                            {item?.sections?.map((section) => {
                                return (
                                    <Row
                                        justify="space-between"
                                        align="middle"
                                        style={{ borderTop: 'solid #d4d4d4 2px', padding: '10px' }}
                                    >
                                        <Col span={5}>Section: {section.section} </Col>
                                        <Col span={5}>
                                            days:{' '}
                                            {section?.days?.map((day: string) => (
                                                <span> {day} </span>
                                            ))}
                                        </Col>
                                        <Col span={5}>Start Time: {section.startTime} </Col>
                                        <Col span={5}>End Time: {section.endTime} </Col>
                                        <Button onClick={() => handleEnroll(section._id)}>
                                            Enroll
                                        </Button>
                                    </Row>
                                );
                            })}
                        </div>
                    </Col>
                );
            })}
        </Row>
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