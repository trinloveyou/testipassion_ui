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
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Steps, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';


const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const { Content, Sider } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              marginBottom: '16px',  // ลดระยะห่างลงเล็กน้อย
              color: '#000000',
              paddingLeft: '20px'    // เพิ่ม padding ซ้ายให้ตรงกับ layout เดิม
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
            }}
          >
            ข้อมูลความเสี่ยง
          </Content>
          <div>
          const App: React.FC = () => <DatePicker onChange={onChange} needConfirm />;

          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;