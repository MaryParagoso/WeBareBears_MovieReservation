import React from "react";
import { Layout, Breadcrumb, Button } from 'antd';
import { contentStyle, breadcrumbStyle } from '../stylesheets/landingUI';

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
          <div>
            <h1 style = {{fontSize: '75px'}}>Welcome to Our Website</h1>
            <p style = {{fontSize: '35px'}}>Explore amazing content and more!</p>
            <div>
              <Button ghost size="large" style={{ fontSize: '25px', width: '250px', height: '60px', marginRight: '30px', color: '#b20710', borderColor: '#b20710', backgroundColor: 'white' }}>
                Log In
              </Button>
              <Button type="primary" size="large" htmlType="submit" style={{ fontSize: '25px', width: '250px', height: '60px', backgroundColor: '#b20710' }}>
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
