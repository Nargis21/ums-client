import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
    label: string,
    name: string,
    disabled?: boolean,
    options: { value: string, label: string }[] | undefined
}

const PHSelect = ({ label, name, options, disabled }: TSelectProps) => {
    return (

        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) =>
                    <Form.Item label={label}>
                        <Select
                            size="large"
                            {...field}
                            style={{ width: "100%" }}
                            options={options}
                            disabled={disabled}
                        />
                        {error && <p style={{ color: 'red', marginTop: '2px' }}>{error.message}</p>}
                    </Form.Item>
                }
            />

        </div>
    );
};

export default PHSelect;