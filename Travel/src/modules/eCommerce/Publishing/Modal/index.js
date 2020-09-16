import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaNXB: data ? data.MaNXB : '',
    TenNXB: data ? data.TenNXB : '',
    DiaChi: data ? data.DiaChi : '',
    SoDienThoai: data ? data.SoDienThoai : '',
    Email: data ? data.Email : ''
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaNXB: data ? data.MaNXB : '',
      TenNXB: data ? data.TenNXB : '',
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
      <Input placeholder='Mã NXB' name='MaNXB' value={values.MaNXB} onChange={handleChange} />

      <Input placeholder='Tên NXB' name='TenNXB' value={values.TenNXB} onChange={handleChange} />

      <Input placeholder='Địa Chỉ' name='DiaChi' value={values.DiaChi} onChange={handleChange} />
      
      <Input placeholder='Số Điện Thoại' name='SoDienThoai' value={values.SoDienThoai} onChange={handleChange} />

      <Input placeholder='Email' name='Email' value={values.Email} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa nhà sản xuất" : " Thêm nhà sản xuất"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);