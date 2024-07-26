import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "../../../components/form/PHInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicManagement.type";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { academicFacultySchema } from "../../../schemas/academicFaculty";

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...')

        const facultyData = {
            name: data.name,
        }
        try {
            const res = await addAcademicFaculty(facultyData) as TResponse<TAcademicFaculty>
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId })
            } else {
                toast.success('Semester created!', { id: toastId })
            }
        }
        catch (err) {
            toast.error('Something Went Wrong')
        }
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
                    <PHInput label="Name" type="text" name="name"></PHInput>
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;