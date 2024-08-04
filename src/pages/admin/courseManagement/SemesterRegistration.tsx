import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useAddSemesterRegistrationMutation } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";


const SemesterRegistration = () => {
    const { data: academicSemesters } = useGetAllSemestersQuery([{ name: 'sort', value: 'year' }])
    const [addSemesterRegistration] = useAddSemesterRegistrationMutation()

    const academicSemestersOptions = academicSemesters?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...')
        const semesterData = {
            ...data,
            minCredit: Number(data.minCredit),
            maxCredit: Number(data.maxCredit),
        }
        try {
            const res = await addSemesterRegistration(semesterData) as TResponse<any>
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
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label="Academic Semester" name="academicSemester" options={academicSemestersOptions} />
                    <PHSelect label="Status" name="status" options={semesterStatusOptions} />
                    <PHDatePicker label="Start Date" name="startDate" />
                    <PHDatePicker label="End Date" name="endDate" />
                    <PHInput type="text" label="Min Credit" name="minCredit" />
                    <PHInput type="text" label="Max Credit" name="maxCredit" />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default SemesterRegistration;