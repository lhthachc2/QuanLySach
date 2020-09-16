import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppRoutes from 'routes';
import { Layout, Menu, Row, Col, Avatar } from "antd";
import {
  HomeFilled,
  MailFilled,
  AccountBookFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CaretRightFilled,
  RightCircleOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import "assets/vendors/style";
import './app.less';
const { Header, Sider, Content } = Layout;

const Index = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='root-menu'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <p style={{ color: "orange", paddingTop: 20 }}>Account</p>
        </div>
        <Menu theme="dark" mode="inline" style={{ paddingTop: 8 }}>
          <Menu.Item key="1">
            <Link to="/notification">
              <HomeFilled />
              <span> Trang chủ</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/customer">
              <AccountBookFilled />
              <span>Tài Khoản</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/home">
              <CaretRightFilled />
              <span>Thể Loại</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about">
              <CaretRightFilled />
              <span>Sản Phẩm</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/publishing">
              <CaretRightFilled />
              <span>Nhà Xuất Bản</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/bill">
              <CaretRightFilled />
              <span>Hóa Đơn</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/billdetail">
              <CaretRightFilled />
              <span>Chi Tiết Hóa Đơn</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/author">
              <CaretRightFilled />
              <span>Tác Giả</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/releasec">
              <CaretRightFilled />
              <span>Công Ty Phát Hành</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="10">
            <Link to="/promotion">
              <CaretRightFilled />
              <span>Thông báo</span>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="11">
            <Link to="/thongke">
              <CaretRightFilled />
              <span>Thống kê</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="12">
            <Link to="/">
              <RightCircleOutlined />
              <span>Đăng xuất</span>
            </Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row style={{ backgroundColor: "#001529" }}>
            <Col span={3} style={{ color: 'white', fontSize: 30 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Col>
            <Col style={{ marginLeft: "auto", paddingRight: 20, color: "#ffff" }}>
              <h1 style={{ color: "orange", fontSize: 30 }}>Quản lý bán sách</h1>
            </Col>

            <Col style={{ marginLeft: "auto", paddingRight: 20 }}>
              <div style={{ display: 'flex' }}>
                <Avatar
                  size={50}
                  src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/a/fahasa_7_15.jpg"
                />
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="contentApp"
          style={{
            margin: "10px 10px",
            padding: 5,
          }}
        >
          <Switch>
            <Route path={`${props.match.url}`} component={AppRoutes} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
