import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    name: string,
    label?: string
}
const PHDatePicker = ({ name, label }: TInputProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) =>
                    <Form.Item label={label}>
                        <DatePicker {...field} id={name} size="large" style={{ width: '100%' }} />
                        {error && <p style={{ color: 'red', marginTop: '2px' }}>{error.message}</p>}
                    </Form.Item>}
            />
        </div>
    );
};

export default PHDatePicker;