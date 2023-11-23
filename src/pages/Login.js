import React from 'react';
import { Button, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import '../login.css';

const App: React.FC = () => (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    </>
  );
  
export default App;