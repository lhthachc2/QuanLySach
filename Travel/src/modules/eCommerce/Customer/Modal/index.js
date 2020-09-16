import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaKhachHang: data ? data.MaKhachHang : '',
    TenKhachHang: data ? data.TenKhachHang : '',
    DiaChi: data ? data.DiaChi : '',
    SoDienThoai: data ? data.SoDienThoai : '',
    Email: data ? data.Email : ''
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaKhachHang: data ? data.MaKhachHang : '',
      TenKhachHang: data ? data.TenKhachHang : '',
      DiaChi: data ? data.DiaChi : '',
      SoDienThoai: data ? data.SoDienThoai : '',
      Email: data ? data.Email : ''
    });
  },[id]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    props.handleSubmit(values);
    setValues(initilalValue);
  };

  return (
    <Form onSubmit={() => handleSubmit()}>
      <Input placeholder='Mã Khách Hàng' name='MaKhachHang' value={values.MaKhachHang} onChange={handleChange} />

      <Input placeholder='Tên Khách Hàng' name='TenKhachHang' value={values.TenKhachHang} onChange={handleChange} />

      <Input placeholder='Địa Chỉ' name='DiaChi' value={values.DiaChi} onChange={handleChange} />

      <Input placeholder='Số Điện Thoại' name='SoDienThoai' value={values.SoDienThoai} onChange={handleChange} />

      <Input placeholder='Email' name='Email' value={values.Email} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa khách hàng" : " Thêm khách hàng"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);