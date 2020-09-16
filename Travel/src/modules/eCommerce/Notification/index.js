import React, { Component, useState } from 'react';
import { Table, Input, Dropdown, Menu, Button } from 'antd';
import { postNotification } from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [id, setId] = useState('');
  const columns = [
    {
      title: 'Ma Thiet Bi',
      dataIndex: 'maThietBi',
      key: 'maThietBi',
    },
    {
      title: 'Ten Thiet Bi',
      dataIndex: 'tenThietBi',
      key: 'tenThietBi',
    }
  ];
  const rendermenu = () => {
    let result = "";
    if (data.length > 0)
      result = data.map(item => {
        return (
          <Menu.Item key={item.maThietBi}>
            <div onClick={() => {
              setId(item.tenThietBi)
            }}>{item.tenThietBi}</div>
          </Menu.Item>
        );
      });
    return result;
  };
  const menu = <Menu>{rendermenu()}</Menu>;
  const onPostNotification = () => {
    dispatch(postNotification({
      data: {
        id: data.map(item => { return item.tenThietBi }),
        content: name,
        heading: heading
      }
    }))
  }
  return (
    <div style={{ marginLeft: "auto", paddingTop: 20 }}>
      <Input placeholder='Tiêu đề' onChange={e => { setHeading(e.target.value) }} />
      <Input placeholder='Nội dung thông báo' onChange={e => { setName(e.target.value) }} />
      <div>
        <Dropdown style={{ marginLeft: "auto", paddingRight: 20, color: "#ffff" }} overlay={menu} trigger={["click"]} >
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Chọn thiết bị</a>
        </Dropdown>
      </div>
      <Button onClick={onPostNotification}>Gửi thông báo</Button>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}
export default index;