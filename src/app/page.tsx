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
  CalendarOutlined,
  DeleteOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Steps, DatePicker, Button, Dropdown, Form, message, Divider, Upload } from 'antd';
import type { DatePickerProps, MenuProps, UploadProps } from 'antd';
import { Row, Col, Input } from 'antd';
const { Content, Sider } = Layout;
import { ItemType, MenuItemType } from 'antd';
const [goals, setGoals] = useState([
  {
    id: 1,
    title: '',
    strategies: [
      {
        id: 1,
        title: '',
        tactics: [
          {
            id: 1,
            title: ''
          }
        ]
      }
    ]
  }
]);

// Add a new goal
const addGoal = (): void => {
  setGoals([
    ...goals,
    {
      id: goals.length + 1,
      title: '',
      strategies: [
        {
          id: 1,
          title: '',
          tactics: [
            {
              id: 1,
              title: ''
            }
          ]
        }
      ]
    }
  ]);
};

// Add a new strategy
const addStrategy = (goalIndex: number) => {
  const newGoals = [...goals];
  const newStrategy = {
    id: newGoals[goalIndex].strategies.length + 1,
    title: '',
    tactics: [
      {
        id: 1,
        title: ''
      }
    ]
  };
  newGoals[goalIndex].strategies.push(newStrategy);
  setGoals(newGoals);
};

// Add a new tactic
const addTactic = (goalIndex: number, strategyIndex: number) => {
  const newGoals = [...goals];
  const newTactic = {
    id: newGoals[goalIndex].strategies[strategyIndex].tactics.length + 1,
    title: ''
  };
  newGoals[goalIndex].strategies[strategyIndex].tactics.push(newTactic);
  setGoals(newGoals);
};

// Delete a goal
const deleteGoal = (goalIndex: number) => {
  const newGoals = goals.filter((_, index) => index !== goalIndex);
  setGoals(newGoals);
};

// Delete a strategy
const deleteStrategy = (goalIndex: number, strategyIndex: number) => {
  const newGoals = [...goals];
  newGoals[goalIndex].strategies = newGoals[goalIndex].strategies.filter(
    (_, index) => index !== strategyIndex
  );
  setGoals(newGoals);
};

// Delete a tactic
const deleteTactic = (goalIndex: number, strategyIndex: number, tacticIndex: number) => {
  const newGoals = [...goals];
  newGoals[goalIndex].strategies[strategyIndex].tactics =
    newGoals[goalIndex].strategies[strategyIndex].tactics.filter(
      (_, index) => index !== tacticIndex
    );
  setGoals(newGoals);
};





const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Remove the onChange declaration

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
    <Layout style={{ minHeight: '150vh' }}>
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
          items={menuItems as ItemType<MenuItemType>[]}
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
            <div className="max-w-6xl mx-auto p-8"></div>
            <h1 className="text-2xl font-semibold text-gray-800">ข้อมูลความเสี่ยง</h1>
            <div className="max-w-6xl mx-auto p-8"></div>
            <Form layout="vertical" className="space-y-6">
              {/* First Row - 4 columns */}
              <Row gutter={16}>
                {/* Fiscal Year */}
                <Col span={6}>
                  <Form.Item label={<>ปีงบประมาณ<span className="text-red-500">*</span></>}>
                    <DatePicker
                      className="w-full"
                      needConfirm
                      suffixIcon={<CalendarOutlined className="text-text" />}
                      style={{ width: '245px' }}
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
                      height: '250px',
                      fontSize: '18px',
                      paddingLeft: '5px',
                      paddingRight: '5px'
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

            <div className="max-w-6xl mx-auto">

              <p>เชื่อมโยงแผนกลยุทธ์ของคณะ / หน่วยงาน</p>
              <br />

              <div className="bg-gray-200">
                <div className="bg-[#F7F7F9] rounded-lg p-6 max-w-xl w-full">

                  <div style={{ background: "#bbb6b6", padding: "20px", }} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-base font-normal">1. เป้าหมาย</h3>
                      <div className="flex gap-1">
                        <button className="text-red-500 flex-shrink-0 ml-auto">
                          <DeleteOutlined />
                        </button>
                      </div>
                      <Form>
                        <Form.Item className="mb-6">
                          <Input placeholder="" className="w-full bg-white" />
                        </Form.Item>
                      </Form>
                      <div>
                        <div style={{ background: "#e3e0e0", margin: "24px" }} className="ml-2 mb-1 p-2">
                          <div className="h-64 text-lg px-3">
                            <h4 className="text-xs font-normal">1.1 ยุทธศาสตร์</h4>
                            <button className="text-red-500 hover:text-red-700">
                              <DeleteOutlined className="text-xs" />
                            </button>
                          </div>

                          <Form.Item className="mb-0.5 px-1">
                            <Input placeholder="" className="w-1/2 bg-white px-1 py-0.5 text-xs" />
                          </Form.Item>

                          <hr className="my-1" />

                          <div className="ml-2">
                            <div className="flex justify-between items-center px-1 py-0.5">
                              <h5 className="text-xs font-normal">1.1.1 กลยุทธ์</h5>
                              <button className="text-red-500 hover:text-red-700">
                                <DeleteOutlined className="text-xs" />
                              </button>
                            </div>

                            <Form.Item className="mb-2">
                              <Input placeholder="" className="w-full bg-white" />
                            </Form.Item>
                          </div>

                          <Button type="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                            + เพิ่มกลยุทธ์
                          </Button>
                        </div>

                        <Button type="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                          + เพิ่มยุทธศาสตร์
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button type="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                    + เพิ่มเป้าหมาย
                  </Button>
                </div>
              </div>
              <br />
              <p>Upload file </p>
              <br />
              <p>เอกสารประกอบ</p>

              <Upload {...props}>
                <Button
                  icon={<UploadOutlined />}
                  style={{ fontSize: '18px', padding: '10px 20px' }} // ปรับขนาดที่นี่
                >
                  Click to Upload
                </Button>
              </Upload>
              <Divider />
            </div>
            <p>
              1.สาเหตุความเสี่ยง<span style={{ color: 'red' }}>*</span>
            </p>            <br />
            <div>
              <div className="ml-22">
                <div className="flex items-center justify-between px-1 py-0.5">
                  <h5 className="text-xs font-normal font-size=15px">สาเหตุความเสี่ยง</h5>
                  <button className="text-red-500 hover:text-red-700">
                    <DeleteOutlined className="text-xs" />
                  </button>
                </div>




                <Form.Item className="mb-2">
                  <Input placeholder="" className="w-full bg-white" />
                </Form.Item>
                <Button type="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                  + เพิ่มสาเหตุความเสี่ยง
                </Button>
                <br />
                <br />
                <p>
                  Key word ความเสี่ยง<span className="text-red-500">*</span>
                </p>

                <br />

                <Form.Item>
                  <Dropdown menu={menuProps}>
                    <Button className="w-full text-left flex justify-between items-center">
                      <span className="text-gray-400">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                      <DownOutlined className="text-gray-400" />
                    </Button>
                  </Dropdown>
                </Form.Item>

              </div>

            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default DashboardLayout;
