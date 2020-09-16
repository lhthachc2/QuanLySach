import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import {addCustomer, upDateCustomer, deleteCustomer} from './redux/actions'
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormCustomer from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateCustomer(values) : onAddCustomer(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Khach Hang',
      dataIndex: 'maKhachHang',
      key: 'maKhachHang',
    },
    {
      title: 'Ten Khach Hang',
      dataIndex: 'tenKhachHang',
      key: 'tenKhachHang',
    },

    {
      title: 'Dia Chi',
      dataIndex: 'diaChi',
      key: 'diaChi',
    },
    {
      title: 'So Dien Thoai',
      dataIndex: 'soDienThoai',
      key: 'soDienThoai',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maKhachHang)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maKhachHang);
    setShowModal(true);
    setEditData(values);
  }

  const addCustomerButton = () => {
    setShowModal(true);
    setId(null);
  }

  const handleOk = e => {
    setShowModal(false)
  };

  const handleCancel = e => {
    setEditData(null);
    setShowModal(false);
  };

  const onCancelDeleteModal = () => {
    setDeleteList([]);
    setShowDeleteModal(false);
  }

  const onOkDeleteCustomer = () => {
    dispatch(deleteCustomer({
      data: deleteList,
      callback: (status_code, message) => {
        if (status_code === 200) {
          NotificationManager.success(message)
        }
        else {
          NotificationManager.warning(message)
        }
      },
      errorCallback: (message) => {
        NotificationManager.error(message)
      }
    }))
    setShowDeleteModal(false);
  }

  const onAddCustomer = (values) => {
    dispatch(addCustomer({
      data: {
        maKhachHang: values.MaKhachHang,
        matKhau: "123456",
        tenKhachHang: values.TenKhachHang,
        diaChi: values.DiaChi,
        soDienThoai: values.SoDienThoai,
        email: values.Email
      },
      callback: (status_code, message) => {
        if (status_code === 200) {
          NotificationManager.success(message);
          setId(null);
        }
        else {
          NotificationManager.warning(message);
        }
      },
      errorCallback: (message) => {
        NotificationManager.error(message);
      }
    }))
  }

  const onUpdateCustomer = (values) => { 
    dispatch(upDateCustomer({
      data: {
        maKhachHang: values.MaKhachHang,
        matKhau: "123456",
        tenKhachHang: values.TenKhachHang,
        diaChi: values.DiaChi,
        soDienThoai: values.SoDienThoai,
        email: values.Email
      },
      callback: (status_code, message) => {
        if (status_code === 200) {
          NotificationManager.success(message);
          setShowModal(false);
          setId(null);
        }
        else {
          NotificationManager.warning(message);
          setShowModal(false);
        }
      },
      errorCallback: (message) => {
        NotificationManager.error(message);
        setShowModal(false);
      }
    }))
  }
  return (
    <div>
      <Button onClick={addCustomerButton} type='primary'>Thêm khách hàng</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteCustomer}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormCustomer
          handleSubmit={handleSubmit}
          id={id}
          data={editData} />
      </Modal>
      <Table
        dataSource={data}
        columns={columns} />;
    </div>
  );
}
export default index;