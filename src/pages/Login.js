import React from 'react';
import { Button, Form, Input, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const overlayColor = 'rgba(0, 0, 0, 0.5)'; // Adjust the transparency as needed

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  padding: '20px',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://img.freepik.com/premium-vector/red-metal-texture-background_46250-321.jpg?w=1060")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
  fontSize: '30px',
  height: '92px',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(80vh)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://c1.wallpaperflare.com/preview/977/573/114/red-seat-cinema-theatre.jpg")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("https://img.freepik.com/premium-vector/red-metal-texture-background_46250-321.jpg?w=1060")`,
  backgroundSize: 'cover',
  imageRendering: 'pixelated',
  padding: '15px',
};

const formStyle = {
  width: '500px',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 255, 0.1)',
  padding: '30px',
  borderRadius: '8px',
  backgroundColor: 'rgba(90, 90, 90, 0.95)',
};

const inputStyle = {
  width: '300px',
  textAlign: 'left',
};

function Login() {
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>We Bare Bears</Header>
        <Content style={contentStyle}>
          <h1 style={{ color: '#fff' }}>Log In to Your Account</h1>
          <Form style={formStyle}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
              <Button ghost size="large" style={{ width: '150px', marginRight: '25px', color: '#000', borderColor: '#000' }}>
                Sign Up
              </Button>
              <Button type="primary" size="large" htmlType="submit" style={{ width: '150px', backgroundColor: '#000' }}>
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
            <Form.Item style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
              <Button ghost size="large" style={{ width: '150px', marginRight: '10px', color: '#000', borderColor: '#000' }}>
                Log In
              </Button>
              <Button type="primary" size="large" htmlType="submit" style={{ width: '150px', backgroundColor: '#000' }}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Content>
 
