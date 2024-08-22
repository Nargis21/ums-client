import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
    const defaultValues = {
        userId: "2028010001",
        password: "student123"
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Logging In')
        try {
            const userInfo = {
                id: data.userId,
                password: data.password
            }
            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser
            dispatch(setUser({ user: user, token: res.data.accessToken }))
            toast.success("Logged in", { id: toastId, duration: 2000 })
            if (res?.data?.needsPasswordChange) {
                navigate(`/change-password`)
            } else {
                navigate(`/${user.role}/dashboard`)
            }
        }
        catch (err) {
            toast.error('Something Went Wrong', { id: toastId, duration: 2000 })
        }

    }

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type="text" name="userId" label="ID" />
                <PHInput type="text" name="password" label="Password" />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
        </Row>
    );
};

export default Login;