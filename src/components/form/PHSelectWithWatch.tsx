import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TSelectProps = {
    label: string,
    name: string,
    disabled?: boolean,
    options: { value: string, label: string }[] | undefined,
    mode?: 'multiple' | undefined
    onValueChange: React.Dispatch<React.SetStateAction<string>>
}


const PHSelectWithWatch = ({ label, name, options, disabled, mode, onValueChange }: TSelectProps) => {

    const { control } = useFormContext()
    const inputValue = useWatch({
        control,
        name
    })

    useEffect(() => {
        onValueChange(inputValue)
    }, [inputValue])

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
                            mode={mode}
                        />
                        {error && <p style={{ color: 'red', marginTop: '2px' }}>{error.message}</p>}
                    </Form.Item>
                }
            />

        </div>
    );
};

export default PHSelectWithWatch;