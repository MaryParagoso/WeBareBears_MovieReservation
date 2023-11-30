import React from "react";
import { Layout, Breadcrumb, Button } from 'antd';
import { contentStyle, breadcrumbStyle, buttonLogin, buttonSignup } from '../stylesheets/landingUI';

const { Content } = Layout;

function Landing() {
  return (
    <div>
      <Layout>
        <Content style={contentStyle}>
          <Breadcrumb style={breadcrumbStyle}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <h1 style={{ fontSize: '75px' }}>Welcome to Our Website</h1>
            <p style={{ fontSize: '35px' }}>Explore amazing content and more!</p>
            <div>
              <Button ghost size="large" style={buttonLogin}>
                Log In
              </Button>
              <Button type="primary" size="large" htmlType="submit" style={buttonSignup}>
                Sign Up
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Landing;
