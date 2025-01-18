import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";


type FieldType = {
  id?: string;
  password?: string;
  remember?: string;
};





const SignIn = () => {
  const dispatch = useAppDispatch();

  const [login, {data, error} ] = useLoginMutation();

console.log("data=> ", data);
console.log("error", error);

const onFinish: FormProps<FieldType>['onFinish'] =  async(values) => {
  console.log('Success:', values);
  const userInfo = {
    id: values.id,
    password: values.password
  }
 const res = await login(userInfo).unwrap();
 const user = verifyToken(res.data.Atoken);
 
 dispatch(setUser({user: user , token: res.data.Atoken }))
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return (
    <Form
    
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 ,paddingTop: '40px'}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="id"
      name="id"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default SignIn