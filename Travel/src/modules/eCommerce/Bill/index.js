import React, { useState, useEffect } from 'react';
import {
  Table,
  Modal,
  Badge,
  Button
} from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { DeleteOutlined } from '@ant-design/icons';
import { upDateBill, addBill, deleteBill } from './redux/actions'
import { addBillDetail } from '../Billdetail/redux/actions'
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import FormBill from './Modal';
import firebase from '../../../../firebase/firebaseConfig';
import NotificationOutlined from '@ant-design/icons/NotificationOutlined';


const index = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const [localData, setLocaldata] = useState([]);
  const [showDeleteModel, setShowDeleteModal] = useState(false);
  const [editData, setEditData] = useState();
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);
  const [deleteList, setDeleteList] = useState();
  const [id, setId] = useState(-1);

  const handleSubmit = (values) => {
    id ? onUpdateBill(values) : onAddBill(values)
  }

  const onSelectedDelete = (values) => {
    setDeleteList(values);
    setShowDeleteModal(true);
  }

  const columns = [
    {
      title: 'Ma Hoa Don',
      dataIndex: 'maHoaDon',
      key: 'maHoaDon',
    },
    {
      title: 'Ma Khach Hang',
      dataIndex: 'maKhachHang',
      key: 'maKhachHang',
    },
    {
      title: 'Ngay Lap',
      dataIndex: 'ngayLap',
      key: 'ngayLap',
    },
    {
      title: 'Thanh Tien',
      dataIndex: 'thanhTien',
      key: 'thanhTien',
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <DeleteOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectedDelete(record.maHoaDon)} />
          <EditOutlined style={{ paddingLeft: 10 }} onClick={() => onSelectRow(record)} />
        </span>
      )
    }
  ];

  const dbRef = firebase.database();
  const onClickNotification = () => {
    console.log('click');
    const dt = [];
    dbRef.ref('Bills').on("child_added", function (dataSnapshot) {
      dispatch(addBill({
        data: {
          maHoaDon: dataSnapshot.key,
          maKhachHang: dataSnapshot.val().maKH,
          ngayLap: dataSnapshot.val().dateBill,
          thanhTien: dataSnapshot.val().tongTien,
          diaChi: "Nha Trang",
          trangThai: 1,
        },
        callback: (status_code, message) => {
          if (status_code === 200) {
            NotificationManager.success(message);
            setId(null);
            window.location.reload();
          }
          else {
            NotificationManager.warning(message);
          }
        },
        errorCallback: (message) => {
          NotificationManager.error(message);
        }
      }),
      );
      dataSnapshot.val().cthd.map(item => {
        const it = {
          maHoaDon: dataSnapshot.key,
          maSach: item.maSP,
          soLuong: item.soLuong,
          donGia: item.donGia,
        }
        dt.push(it)
      });
      dbRef.ref('Bills').child(dataSnapshot.key).remove()
    }
    );

    dispatch(addBillDetail({
      data: dt,
    }));
  }
  useEffect(() => {
    const dt = [];
    setTimeout(() => {
      dbRef.ref('Bills').on("child_added", function (dataSnapshot) {
        dt.push({
          maHD: dataSnapshot.key,
          maKH: dataSnapshot.val().maKH,
          dateBill: dataSnapshot.val().dateBill,
          tongTien: dataSnapshot.val().tongTien,
          detail: dataSnapshot.val().cthd
        })
      });
      setLocaldata(dt);
    }, 2000);
    if (data) {
      if (data.length !== localData.length) {
        setCount(localData.length)
      }
    }
  }, [localData])

  const [showModal, setShowModal] = useState(false);

  const onSelectRow = (values) => {
    setEditData(null);
    setId(values.maHoaDon);
    setShowModal(true);
    setEditData(values);
  }

  const addBillButton = () => {
    setShowModal(true);
    setId(null);
  }

  const handleCancel = e => {
    setEditData(null);
    setShowModal(false);
  };

  const onCancelDeleteModal = () => {
    setDeleteList([]);
    setShowDeleteModal(false);
  }

  const onOkDeleteBill = () => {
    dispatch(deleteBill({
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

  const onAddBill = (values) => {
    dispatch(addBill({
      data: {
        maHoaDon: "HD008",
        maKhachHang: "KH001",
        ngayLap: "01/02/2020 00:00:00",
        thanhTien: 120.00
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

  const onUpdateBill = (values) => {
    dispatch(upDateBill({
      data: {
        maTheLoai: "NT00001",
        tenTheLoai: values.tenTheLoai
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
      <Button onClick={addBillButton} type='primary'>Thêm hóa đơn</Button>
      <Badge count={count !== 0 ? count : ''} >
        <NotificationOutlined
          onClick={onClickNotification}
          style={{ fontSize: '30px', color: '#000000' }} />
      </Badge>
      <Modal
        title="Basic Modal"
        visible={showDeleteModel}
        onOk={onOkDeleteBill}
        onCancel={onCancelDeleteModal}
      >
        Bạn có muốn xóa không?
      </Modal>
      <Modal
        width={650}
        visible={showModal}
        footer={null}
        onCancel={handleCancel}>
        <FormBill
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