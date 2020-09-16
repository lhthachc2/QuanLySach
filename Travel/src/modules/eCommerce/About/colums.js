import React from 'react'
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
export  const columns = [
    {
      title: 'Ma Sach',
      dataIndex: 'maSach',
      key: 'name',
    },
    {
      title: 'Ten Sach',
      dataIndex: 'tenSach',
      key: 'age',
    },

    {
      title: 'So Trang',
      dataIndex: 'soTrang',
      key: 'address',
    },
    {
      title: 'So Luong',
      dataIndex: 'soLuong',
      key: 'soLuong',
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <PlusOutlined ></PlusOutlined>
          <DeleteOutlined style={{ paddingLeft: 10 }}></DeleteOutlined>
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record.maSach, record.tenSach, record.hinhAnh, record.soTrang, record.ngayXuatBan, record.kichThuoc, record.loaiBia, record.soLuong, record.giaBan, record.giamGia, record.tinhTrang, record.ghiChu)} />
        </span>
      )
    }
  ];