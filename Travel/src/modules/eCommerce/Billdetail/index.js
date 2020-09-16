import React, { Component } from 'react';
import { Table } from 'antd';

const index = (props) => {
    const { data } = props;
    const columns = [
        {
            title: 'Ma Hoa Don',
            dataIndex: 'maHoaDon',
            key: 'maHoaDon',
        },
        {
            title: 'Ma Sach',
            dataIndex: 'maSach',
            key: 'maSach',
        },
        {
            title: 'So Luong',
            dataIndex: 'soLuong',
            key: 'soLuong',
        },
        {
            title: 'Don Gia',
            dataIndex: 'donGia',
            key: 'donGia',
        },
    ];
    return (
        <div>
            <Table dataSource={data} columns={columns} />;
        </div>
    );
}
export default index;