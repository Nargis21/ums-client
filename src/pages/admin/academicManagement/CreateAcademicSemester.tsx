import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";

const options = [
    { value: '01', label: 'Autumn' },
    { value: '02', label: 'Summer' },
    { value: '03', label: 'Fall' },
]

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = options[Number(data.name) - 1].label
        const semesterData = {
            name,
            code: data.name
        }
        console.log(semesterData);
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label="Name" name="name" options={options} />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;