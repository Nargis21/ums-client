import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { academicDepartmentSchema } from "../../../schemas/academicDepartment";
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultiesQuery, } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types";
import { TAcademicDepartment } from "../../../types/academicManagement.type";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";


const CreateAcademicDepartment = () => {
    const { data: facultyData } = useGetAllAcademicFacultiesQuery(undefined)
    const facultyOptions = facultyData?.data?.map((faculty) => ({
        value: faculty._id,
        label: faculty.name
    }))

    const [addAcademicDepartment] = useAddAcademicDepartmentMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...')
        const departmentData = {
            name: data.name,
            academicFaculty: data.academicFaculty
        }
        try {
            const res = await addAcademicDepartment(departmentData) as TResponse<TAcademicDepartment>
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
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
                    <PHInput label="Name" name="name" type="text" />
                    <PHSelect label="Academic Faculty" name="academicFaculty" options={facultyOptions} />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicDepartment;