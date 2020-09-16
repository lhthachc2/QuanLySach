import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import { upDateRelease, deleteRelease, addRelease } from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormRelease from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateRelease(values) : onAddRelease(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Cong Ty Phat Hanh',
      dataIndex: 'maCongTy',
      key: 'maCongTy',
    },
    {
      title: 'Ten Cong Ty Phat Hanh',
      dataIndex: 'tenCongTy',
      key: 'tenCongTy',
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
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maCongTy)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maCongTy);
    setShowModal(true);
    setEditData(values);
  }

  const addReleaseButton = () => {
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

  const onOkDeleteRelease = () => {
    dispatch(deleteRelease({
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

  const onAddRelease = (values) => {
    dispatch(addRelease({
      data: {
        maCongTy: values.MaCongTy,
        tenCongTy: values.TenCongTy,
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

  const onUpdateRelease = (values) => { 
    dispatch(upDateRelease({
      data: {
        maCongTy: values.MaCongTy,
        tenCongTy: values.TenCongTy,
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
      <Button onClick={addReleaseButton} type='primary'>Thêm CTPH</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteRelease}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormRelease
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