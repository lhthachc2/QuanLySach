import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import { upDatenNotidication, deleteNotification, addNotification } from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormNotification from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateNotification(values) : onAddNotification(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Thong Bao',
      dataIndex: 'maThongBao',
      key: 'maThongBao',
    },
    {
      title: 'Ten Thong Bao',
      dataIndex: 'tenThongBao',
      key: 'tenThongBao',
    },

    {
      title: 'Noi Dung',
      dataIndex: 'noiDung',
      key: 'noiDung',
    },
    {
      title: 'Ngay Thong Bao',
      dataIndex: 'ngayThongBao',
      key: 'ngayThongBao',
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maThongBao)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maThongBao);
    setShowModal(true);
    setEditData(values);
  }

  const addNotificationButton = () => {
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

  const onOkDeleteNotification = () => {
    dispatch(deleteNotification({
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

  const onAddNotification = (values) => {
    dispatch(addNotification({
      data: {
        maThongBao: values.MaThongBao,
        maKhachHang: values.MaKhachHang,
        tenThongBao: values.TenThongBao,
        noiDung: values.NoiDung,
        ngayThongBao: values.NgayThongBao
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

  const onUpdateNotification = (values) => { 
    dispatch(upDatenNotidication({
      data: {
        maThongBao: values.MaThongBao,
        maKhachHang: values.MaKhachHang,
        tenThongBao: values.TenThongBao,
        noiDung: values.NoiDung,
        ngayThongBao: values.NgayThongBao
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
      <Button onClick={addNotificationButton} type='primary'>Thêm thông báo</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteNotification}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormNotification 
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