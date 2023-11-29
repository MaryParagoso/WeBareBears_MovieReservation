import React from 'react';
import { Button, Form, Input, Layout } from 'antd';
import {headerStyle, contentStyle, footerStyle, formStyle, inputStyle, formItem } from '../stylesheets/mainUI';

const { Header, Content, Footer } = Layout;

function Registration() {
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>We Bare Bears</Header>
        <Content style={contentStyle}>
          <h1 style={{ color: '#fff' }}>Create Your Account</h1>
          <Form style={formStyle}>
            <Form.Item
              style={formItem}
              label="Valid Email"
              name="email"
              rules={[{ required: true, message: 'Please input your Email Address!' }]}>
              <Input size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item 
              style={formItem} 
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item 
              style={formItem}
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item
              style={formItem}
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" style={inputStyle} />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
              <Button ghost size="large" style={{ width: '150px', marginRight: '25px', color: '#000', borderColor: '#000' }}>
                Log In
              </Button>
              <Button type="primary" size="large" htmlType="submit" style={{ width: '150px', backgroundColor: '#000' }}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={footerStyle}>Created by We Bare Bears.</Footer>
      </Layout>
    </div>
  );
}

export default Registration;
