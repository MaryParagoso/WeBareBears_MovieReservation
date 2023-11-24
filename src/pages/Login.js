import React from 'react';
import { Button, Form, Input, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  padding: '20px', 
  backgroundColor: '#7dbcea',
  fontSize: '30px',
  height: '100px',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(80vh)', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f2f5',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  padding: '15px', 
};

const formStyle = {
  width: '500px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '50px', // Increased padding for better spacing
  borderRadius: '8px', // Rounded corners
  backgroundColor: '#fff',
};

function Login() {
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>We Bare Bears</Header>
        <Content style={contentStyle}>
          <Form style={formStyle}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={footerStyle}>Created by We Bare Bears.</Footer>
      </Layout>
    </div>
  );
}

export default Login;
