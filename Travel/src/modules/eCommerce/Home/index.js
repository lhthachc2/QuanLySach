import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import {upDateTypeBook, addTypeBook, deleteTypeBook} from './redux/actions'
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormTypeBook from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateTypeBook(values) : onAddTypeBook(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma The Loai',
      dataIndex: 'maTheLoai',
      key: 'maTheLoai',
    },
    {
      title: 'Ten The Loai',
      dataIndex: 'tenTheLoai',
      key: 'tenTheLoai',
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maTheLoai)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maTheLoai);
    setShowModal(true);
    setEditData(values);
  }

  const addTypeBookButton = () => {
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

  const onOkDeleteTypeBook = () => {
    dispatch(deleteTypeBook({
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

  const onAddTypeBook = (values) => {
    dispatch(addTypeBook({
      data: {
        maTheLoai: values.MaTheLoai,
        tenTheLoai: values.TenTheLoai
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

  const onUpdateTypeBook = (values) => { 
    dispatch(upDateTypeBook({
      data: {
        maTheLoai: values.MaTheLoai,
        tenTheLoai: values.TenTheLoai
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
      <Button onClick={addTypeBookButton} type='primary'>Thêm thể loại</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteTypeBook}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormTypeBook
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