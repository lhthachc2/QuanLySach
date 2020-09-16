import React, { useState } from 'react';
import {
  Table,
  Modal,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import { upDateBook, deleteBook, addBook } from './redux/actions';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormBook from './Modal';

const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);
  const handleSubmit = (values) => {
    id ? onUpdateBook(values) : onAddBook(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Sach',
      dataIndex: 'maSach',
      key: 'maSach',
    },
    {
      title: 'Ten Sach',
      dataIndex: 'tenSach',
      key: 'tenSach',
    },

    {
      title: 'So Trang',
      dataIndex: 'soTrang',
      key: 'soTrang',
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
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maSach)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maSach);
    setShowModal(true);
    setEditData(values);
  }

  const addBookButton = () => {
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

  const onOkDeleteBook = () => {
    dispatch(deleteBook({
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

  const onAddBook = (values) => {
    dispatch(addBook({
      data: {
        maSach: values.MaSach,
        tenSach: "Thach",
        hinhAnh: "http://192.168.1.102:5001/api/image/Nha_Gia_Kim.jpg",
        soTrang: "100",
        ngayXuatBan: 1998,
        kichThuoc: "2 nhân 3",
        loaiBia: "Cứng",
        soLuong: 10,
        giaBan: 12000.00,
        giamGia: 0.02,
        tinhTrang: "Còn hàng",
        ghiChu: "NHÀ GIẢ KIM là cuốn sách được in nhiều nhất chỉ sau Kinh Thánh. Cuốn sách của Paulo Coelho có sự hấp dẫn ra sao khiến độc giả không chỉ các xứ dùng ngôn ngữ Bồ Đào Nha mà các ngôn ngữ khác say mê như vậy? ",
        maTheLoai: "TL001",
        maNhaXuatBan: "NXB001",
        maTacGia: "TG001",
        maCongTy: "CT001",
        soSao: 5
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

  const onUpdateBook = (values) => {
    dispatch(upDateBook({
      data: {
        maSach: "SA00100",
        tenSach: "Thang",
        hinhAnh: "http://192.168.1.102:5001/api/image/Nha_Gia_Kim.jpg",
        soTrang: "100",
        ngayXuatBan: 1998,
        kichThuoc: "2 nhân 3",
        loaiBia: "Cứng",
        soLuong: 10,
        giaBan: 12000.00,
        giamGia: 0.02,
        tinhTrang: "Còn hàng",
        ghiChu: "NHÀ GIẢ KIM là cuốn sách được in nhiều nhất chỉ sau Kinh Thánh. Cuốn sách của Paulo Coelho có sự hấp dẫn ra sao khiến độc giả không chỉ các xứ dùng ngôn ngữ Bồ Đào Nha mà các ngôn ngữ khác say mê như vậy? ",
        maTheLoai: "TL001",
        maNhaXuatBan: "NXB001",
        maTacGia: "TG001",
        maCongTy: "CT001",
        soSao: 5
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
      <Button onClick={addBookButton} type='primary'>Thêm sách</Button>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteBook}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormBook
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