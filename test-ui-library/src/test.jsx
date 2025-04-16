import React from 'react';
import { Breadcrumb, Button, Layout, Menu, Space, DatePicker } from 'antd';
import Calender from './Calender';

const { Header, Content, Footer, Row, Col, Input } = Layout;

const items = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: `🐜Ant Design Test`,
}));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >

          <Row>
            <Col span={8}>
              <h4>Input your name</h4>
              <Input placeholder="Outlined" />
              <Button type="primary" style={{ marginTop: 16 }}>Submit</Button>
            </Col>
            <Col span={8}>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
            </Col>
            <Col span={8}><Calender /></Col>
          </Row>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;