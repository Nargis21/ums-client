import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";


const getCurrentYear = new Date().getFullYear()
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(getCurrentYear + number),
    label: String(getCurrentYear + number)
}))

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = semesterOptions[Number(data.name) - 1].label
        const semesterData = {
            name,
            code: data.name,
            year: data.year
        }
        console.log(semesterData);
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label="Name" name="name" options={semesterOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <PHSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;