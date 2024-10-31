"use client";

import React, { useState } from 'react';
import {
  CopyOutlined,
  FileDoneOutlined,
  DashboardOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  FileExclamationOutlined,
  ClusterOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
  DatabaseOutlined,
  UserOutlined,
  LogoutOutlined,
  FileMarkdownOutlined,
  ContainerOutlined,
  DownOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Steps, DatePicker, Button, Dropdown, Form, message, Divider } from 'antd';
import type { DatePickerProps, MenuProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { Row, Col, Input } from 'antd';


const { Content, Sider } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange: DatePickerProps<Dayjs>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  // Define items for Steps component
  const items = [
    {
      title: <div style={{ fontSize: '14px' }}>ข้อมูลความเสี่ยง</div>,
    },
    {
      title: <div style={{ fontSize: '14px' }}>ประเมินความเสี่ยง</div>,
    },
    {
      title: <div style={{ fontSize: '14px' }}>จัดการความเสี่ยง</div>,
    },
    {
      title: <div style={{ fontSize: '14px' }}>สรุปรายละเอียด</div>,
    },
  ];

  const dropdownItems: MenuProps['items'] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  // Event Handlers
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  // Dropdown Menu Props Configuration
  const menuProps = {
    items: dropdownItems,
    onClick: handleMenuClick,
  };

  // Define menu items
  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined style={{ color: 'gray', fontSize: '15px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>Dashboard</span>
    },
    { type: 'divider' },
    {
      key: 'planning',
      label: <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>Planning</span>,
      disabled: true,
    },
    {
      key: '2',
      icon: <CopyOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนกลยุทธ์</span>
    },
    {
      key: '3',
      icon: <FileDoneOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนปฎิบัติการ</span>
    },
    {
      key: '4',
      icon: <FileExclamationOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>แผนบริหารความเสี่ยง</span>
    },
    {
      key: '5',
      icon: <FieldTimeOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประเด็นเร่งด่วน</span>
    },
    {
      key: '6',
      icon: <ClusterOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>จุดเน้นคณะวิชา/ส่วนงาน</span>
    },
    { type: 'divider' },
    {
      key: 'budgeting',
      label: <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>Budgeting</span>,
      disabled: true,
    },
    {
      key: '7',
      icon: <FileMarkdownOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ประมาณร่ายรับ</span>
    },
    {
      key: '8',
      icon: <DollarOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>การจัดทำรายจ่าย</span>
    },
    { type: 'divider' },
    {
      key: 'report',
      label: <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>Report</span>,
      disabled: true,
    },
    {
      key: '9',
      icon: <ContainerOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>รายงาน</span>
    },
    { type: 'divider' },
    {
      key: 'tracking',
      label: <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>Tracking</span>,
      disabled: true,
    },
    {
      key: '10',
      icon: <EnvironmentOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ติดตามโครงการ</span>
    },
    {
      key: '11',
      icon: <DashboardOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ติดตามตัวชี้วัด</span>
    },
    { type: 'divider' },
    {
      key: 'management',
      label: <span style={{ fontSize: '10px', color: '#000000', textAlign: 'left' }}>Management</span>,
      disabled: true,
    },
    {
      key: '12',
      icon: <DatabaseOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ข้อมูลตั้งต้น</span>
    },
    {
      key: '13',
      icon: <UserOutlined style={{ color: 'gray', fontSize: '17px' }} />,
      label: <span style={{ fontSize: '14px', color: '#adadad' }}>ตัวจัดสิทธิ์และผู้ใช้งาน</span>
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null}
        width={250}
        style={{
          background: colorBgContainer,
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
        }}
      >
        <div style={{ padding: '10px', textAlign: 'right' }}>
          {collapsed ? (
            <RightSquareOutlined
              onClick={() => setCollapsed(false)}
              style={{ color: 'black', fontSize: '24px' }}
            />
          ) : (
            <LeftSquareOutlined
              onClick={() => setCollapsed(true)}
              style={{ color: 'black', fontSize: '24px' }}
            />
          )}
        </div>

        {!collapsed && (
          <div style={{ textAlign: 'center', padding: '10px', marginTop: '-50px' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/88/Silpakorn_University_Logo_02.png"
              alt="Silpakorn University"
              style={{
                width: '100px',
                borderRadius: '8px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>
        )}

        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            height: '100%',
            borderRight: 0,
            backgroundColor: colorBgContainer
          }}
          items={menuItems}
        />
      </Sider>

      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '14px 0', padding: '0 16px' }}>
              <Breadcrumb
                items={[
                  { title: 'สมรัก ภักดี' },
                  { title: <LogoutOutlined /> },
                ]}
              />
            </div>
          </div>
          <br />
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '500',
              marginBottom: '16px',
              color: '#000000',
              paddingLeft: '20px'
            }}>
              เพิ่มประเด็นความเสี่ยง
            </h1>
            <br />
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <Steps
                current={0}
                labelPlacement="vertical"
                items={items}
                style={{
                  padding: '0 20px',
                  width: '100%'
                }}
                size="small"
              />
            </div>
          </div>
          <br />
          <Content
            style={{
              padding: 24,
              margin: 30,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              fontSize: '14px',
            }}
          >
            <div className="max-w-6xl mx-auto p-8">
              <h1 className="text-2xl font-semibold text-gray-800">ข้อมูลความเสี่ยง</h1>
              <br />
              <Form layout="vertical" className="space-y-6">
                {/* First Row - 4 columns */}
                <Row gutter={16}>
                  {/* Fiscal Year */}
                  <Col span={6}>
                    <Form.Item label={<>ปีงบประมาณ<span className="text-red-500">*</span></>}>
                      <DatePicker
                        className="w-full"
                        needConfirm
                        suffixIcon={<CalendarOutlined className="text-gray-400" />}
                      />
                    </Form.Item>
                  </Col>

                  {/* Department */}
                  <Col span={6}>
                    <Form.Item label={<>หน่วยงาน/ส่วนงาน ที่รับผิดชอบ<span className="text-red-500">*</span></>}>
                      <Dropdown menu={menuProps}>
                        <Button className="w-full text-left flex justify-between items-center">
                          <span className="text-gray-400">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                          <DownOutlined className="text-gray-400" />
                        </Button>
                      </Dropdown>
                    </Form.Item>
                  </Col>

                  {/* Executive */}
                  <Col span={6}>
                    <Form.Item label={<>ผู้รับผิดชอบระดับผู้บริหาร<span className="text-red-500">*</span></>}>
                      <Dropdown menu={menuProps}>
                        <Button className="w-full text-left flex justify-between items-center">
                          <span className="text-gray-400">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                          <DownOutlined className="text-gray-400" />
                        </Button>
                      </Dropdown>
                    </Form.Item>
                  </Col>

                  {/* Staff */}
                  <Col span={6}>
                    <Form.Item label={<>ผู้รับผิดชอบระดับเจ้าหน้าที่<span className="text-red-500">*</span></>}>
                      <Dropdown menu={menuProps}>
                        <Button className="w-full text-left flex justify-between items-center">
                          <span className="text-gray-400">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                          <DownOutlined className="text-gray-400" />
                        </Button>
                      </Dropdown>
                    </Form.Item>
                  </Col>
                </Row>

                {/* Second Row - 2 columns */}
                <Row gutter={16}>
                  {/* Risk Category */}
                  <Col span={6}>
                    <Form.Item label={<>ด้านความเสี่ยง<span className="text-red-500">*</span></>}>
                      <Dropdown menu={menuProps}>
                        <Button className="w-full text-left flex justify-between items-center">
                          <span className="text-gray-400">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                          <DownOutlined className="text-gray-400" />
                        </Button>
                      </Dropdown>
                    </Form.Item>
                  </Col>

                  {/* Risk Topic */}
                  <Col span={12}>
                    <Form.Item label={<>ประเด็นความเสี่ยง<span className="text-red-500">*</span></>}>
                      <Input placeholder="⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀" className="text-gray-400" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Divider />
              <p>เชื่อมโยงแผนกลยุทธ์ของมหาวิทยาลัย</p>
              <br />
              <Col span={20}>
                <Form.Item label={<>ยุทธศาสตร์ / กลยุทธ <span className="text-red-500">*</span></>}>
                  <Dropdown menu={menuProps}>
                    <Button
                      style={{
                        height: '250px', // ปรับความสูงที่ต้องการ
                        fontSize: '18px', // ปรับขนาดฟอนต์ตามต้องการ
                        padding: '0 16px' // เพิ่ม Padding เพื่อให้ปุ่มดูใหญ่ขึ้น
                      }}
                      className="custom-button-class flex justify-between items-center"
                    >
                      <span className="placeholder-text">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                      <DownOutlined className="icon-class" />
                    </Button>
                  </Dropdown>
                </Form.Item>
              </Col>
              <Divider />
              <p>เชื่อมโยงแผนกลยุทธ์ของคณะ / หน่วยงาน</p>
              <br />
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg">1. เป้าหมาย</h3>
                    <div className="flex space-x-2">
                      <Button
                        type="text"
                        className="text-red-500 hover:text-red-700"
                        icon={<span className="text-xl">🗑</span>}
                      />
                      <Button
                        type="text"
                        className="text-gray-500 hover:text-gray-700"
                        icon={<span className="text-xl">⌃</span>}
                      />
                    </div>
                  </div>

                  <Form.Item>
                    <Input
                      placeholder="เป้าหมาย"
                      className="w-full border rounded-md"
                    />
                  </Form.Item>

                  <div className="pl-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-md">1.1 ยุทธศาสตร์</h4>
                      <Button
                        type="text"
                        className="text-red-500 hover:text-red-700"
                        icon={<span className="text-xl">🗑</span>}
                      />
                    </div>

                    <Form.Item>
                      <Input
                        placeholder="ยุทธศาสตร์"
                        className="w-full border rounded-md"
                      />
                    </Form.Item>

                    <div className="pl-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="text-md">1.1.1 กลยุทธ์</h5>
                        <Button
                          type="text"
                          className="text-red-500 hover:text-red-700"
                          icon={<span className="text-xl">🗑</span>}
                        />
                      </div>

                      <Form.Item>
                        <Input
                          placeholder="กลยุทธ์"
                          className="w-full border rounded-md"
                        />
                      </Form.Item>

                      <Button
                        type="link"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        + เพิ่มกลยุทธ์
                      </Button>
                    </div>

                    <Button
                      type="link"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      + เพิ่มยุทธศาสตร์
                    </Button>
                  </div>

                  <Button
                    type="link"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    + เพิ่มเป้าหมาย
                  </Button>
                </div>
              </div>
            </div>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;