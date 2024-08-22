import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [changePassword] = useChangePasswordMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await changePassword(data)
        if (res?.data?.success) {
            dispatch(logout())
            navigate('/login')
        }
    }
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={onSubmit}>
                <PHInput type="text" name="oldPassword" label="Old Password" />
                <PHInput type="text" name="newPassword" label="New Password" />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
        </Row>
    );
};

export default ChangePassword;