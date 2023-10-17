import React from "react";
import { Button, Form, Input, Typography } from "antd";
import {UserServices} from "../services/user.service";
import {AuthUtils} from "../utilities/Auth.util";
import {useMutation} from "react-query";


const { Title } = Typography;

function Login() {
  const { mutateAsync: loginRequest , isLoading: loginRequestLoader} = useMutation(UserServices.login);
  const onFinish = async (values) => {
    await loginRequest(values,{
      onSuccess: (data)=>{
        const token = data?.data?.results.token;
        AuthUtils.saveToken(token);
        window.location.reload(true);
      }
    });
  };
  return (
    <div>
      <Title level={2}>Login</Title>

      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item
          name="email"
          rules={[
            {
              require: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input placeholder="Type Your Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              require: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password placeholder="Type Your Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loginRequestLoader}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
