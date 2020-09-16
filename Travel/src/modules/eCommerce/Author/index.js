import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import {addAuthor, upDateAuthor, deleteAuthor} from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormAuthor from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateAuthor(values) : onAddAuthor(values)
  }


  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Tac Gia',
      dataIndex: 'maTacGia',
      key: 'maTacGia',
    },
    {
      title: 'Ten Tac Gia',
      dataIndex: 'tenTacGia',
      key: 'tenTacGia',
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
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maTacGia)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];
  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maTacGia);
    setShowModal(true);
    setEditData(values);
  }

  const addAuthorButton = () => {
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

  const onOkDeleteAuthor = () => {
    dispatch(deleteAuthor({
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

  const onAddAuthor = (values) => {
    dispatch(addAuthor({
      data: {
        maTacGia: values.MaTacGia,
        tenTacGia: values.TenTacGia,
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

  const onUpdateAuthor = (values) => { 
    dispatch(upDateAuthor({
      data: {
        maTacGia: values.MaTacGia,
        tenTacGia: values.TenTacGia,
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
      <Button onClick={addAuthorButton} type='primary'>Thêm tác giả</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteAuthor}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormAuthor
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