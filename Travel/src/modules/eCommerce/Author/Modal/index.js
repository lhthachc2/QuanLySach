import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaTacGia: data ? data.MaTacGia : '',
    TenTacGia: data ? data.TenTacGia : '',
    DiaChi: data ? data.DiaChi : '',
    SoDienThoai: data ? data.SoDienThoai : '',
    Email: data ? data.Email : ''
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaTacGia: data ? data.MaTacGia : '',
      TenTacGia: data ? data.TenTacGia : '',
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
      <Input placeholder='Mã Tác Giả' name='MaTacGia' value={values.MaTacGia} onChange={handleChange} />

      <Input placeholder='Tên Tác Giả' name='TenTacGia' value={values.TenTacGia} onChange={handleChange} />

      <Input placeholder='Địa Chỉ' name='DiaChi' value={values.DiaChi} onChange={handleChange} />

      <Input placeholder='Số Điện Thoại' name='SoDienThoai' value={values.SoDienThoai} onChange={handleChange} />

      <Input placeholder='Email' name='Email' value={values.Email} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa tác giả" : " Thêm tác giả"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);