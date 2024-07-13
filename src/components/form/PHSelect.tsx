import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
    label: string,
    name: string,
    options: { value: string, label: string }[]
}

const PHSelect = ({ label, name, options }: TSelectProps) => {
    return (

        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field }) =>
                    <Form.Item label={label}>
                        <Select
                            {...field}
                            style={{ width: "100%" }}
                            options={options}
                        />
                    </Form.Item>
                }
            />

        </div>
    );
};

export default PHSelect;