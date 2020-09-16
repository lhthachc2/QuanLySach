import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import { upDatePublishing, deletePublishing, addPublishing } from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormPublishing from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdatePublishing(values) : onAddPublishing(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Nha Xuat Ban',
      dataIndex: 'maNhaXuatBan',
      key: 'maNhaXuatBan',
    },
    {
      title: 'Ten Nha Xuat Ban',
      dataIndex: 'tenNhaXuatBan',
      key: 'tenNhaXuatBan',
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
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maNhaXuatBan)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maNhaXuatBan);
    setShowModal(true);
    setEditData(values);
  }

  const addPublishingButton = () => {
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

  const onOkDeletePublishing = () => {
    dispatch(deletePublishing({
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

  const onAddPublishing = (values) => {
    dispatch(addPublishing({
      data: {
        maNhaXuatBan: values.MaNXB,
        tenNhaXuatBan: values.TenNXB,
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

  const onUpdatePublishing = (values) => { 
    dispatch(upDatePublishing({
      data: {
        maNhaXuatBan: values.MaNXB,
        tenNhaXuatBan: values.TenNXB,
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
      <Button onClick={addPublishingButton} type='primary'>Thêm nhà sản xuất</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeletePublishing}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormPublishing 
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