import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string,
    name: string,
    label?: string
}
const PHInput = ({ type, name, label }: TInputProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) =>
                    <Form.Item label={label}>
                        <Input {...field} type={type} id={name} />
                        {error && <p style={{ color: 'red', marginTop: '2px' }}>{error.message}</p>}
                    </Form.Item>}
            />
        </div>
    );
};

export default PHInput;