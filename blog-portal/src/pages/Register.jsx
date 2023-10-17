import React from "react";
import { Button,Form ,Input,Typography } from "antd";
const {Title} = Typography;
function Register(){
const onFinish = (values)=>{
    console.log(values,"on submit value");
};
return (
    <div>
        <Title level={2}>Register</Title>
        <Form name="basic" onFinish = {onFinish} autoComplete="off">
            <Form.Item
             name="email" 
             rules={[
                {
                require:true,
                message : "Please input your email",
            },
            ]}
            >
                <Input placeholder="Type your Email"/>
            </Form.Item>
            <Form.Item
             name="password" 
             rules={[
                {
                require:true,
                message : "Please input your password",
            },
            ]}
            >
                <Input placeholder="Type your password"/>
            </Form.Item>
            <Button type="primary" htmlType="submit">Register</Button>
        </Form>
    </div>
)
}
export default Register;