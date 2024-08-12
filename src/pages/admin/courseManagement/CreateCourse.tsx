import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import PHInput from "../../../components/form/PHInput";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";


const CreateCourse = () => {
    const { data: courses } = useGetAllCoursesQuery(undefined)
    const [addCourse] = useAddCourseMutation()

    const coursesOptions = courses?.data?.map((item) => ({
        value: item._id,
        label: item.title
    }))

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...')

        const courseData = {
            ...data,
            code: Number(data.code),
            credits: Number(data.credits),
            isDeleted: false,
            preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses.map((item: string) => ({ course: item, isDeleted: false })) : []
        }
        console.log(courseData);
        try {
            const res = await addCourse(courseData) as TResponse<any>
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId })
            } else {
                toast.success('Course created!', { id: toastId })
            }
        }
        catch (err) {
            toast.error('Something Went Wrong')
        }
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHInput type="text" label="Title" name="title" />
                    <PHInput type="text" label="Prefix" name="prefix" />
                    <PHInput type="text" label="Code" name="code" />
                    <PHInput type="text" label="Credits" name="credits" />
                    <PHSelect label="Pre Requisite Courses" name="preRequisiteCourses" options={coursesOptions} mode="multiple" />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateCourse;