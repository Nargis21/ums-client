import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const CreateStudent = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        const formData = new FormData()
        formData.append('data', JSON.stringify(data))
        console.log(Object.fromEntries(formData));
    }

    return (
        <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="name" label="Name" />
            <Button htmlType="submit">Submit</Button>
        </PHForm>
    );
};

export default CreateStudent;