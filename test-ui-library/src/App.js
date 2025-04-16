import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Space, DatePicker, Row, Col, Button, Input } from 'antd';
import Calender from './Calender';

const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 1 }).map((_, index) => ({
  key: index + 1,
  label: `🐜Ant Design Practice`,
}));


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //Datepicker
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
          {/* -----------Page Content----------- */}
          <Row gutter={[24, 24]}>
            {/* First Row: Input, Button, and Date Picker */}
            <Col span={24}>
              <Row gutter={[24, 24]}>
                {/* Date Picker Column */}
                <Col span={12}>
                  <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
                    <h4 style={{ marginBottom: 12 }}>Pick a Date</h4>
                    <Space direction="vertical" size="middle">
                      <DatePicker onChange={onChange} style={{ width: '100%' }} />
                    </Space>
                  </div>
                </Col>

                {/* Input Field and Button Column */}
                <Col span={12}>
                  <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
                    <h4 style={{ marginBottom: 8 }}>Input your name</h4>
                    <Input placeholder="Enter your name" style={{ marginBottom: 12 }} />
                    <Button type="primary">Submit</Button>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* Second Row: Calendar */}
            <Col span={24}>
              <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
                <h4 style={{ marginBottom: 12 }}>The day of the month!</h4>
                <Calender />
              </div>
            </Col>
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