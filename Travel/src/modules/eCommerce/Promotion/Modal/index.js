import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaThongBao: data ? data.MaThongBao : '',
    MaKhachHang: data ? data.MaKhachHang : '',
    TenThongBao: data ? data.TenThongBao : '',
    NoiDung: data ? data.NoiDung : '',
    NgayThongBao: data ? data.NgayThongBao : ''
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaThongBao: data ? data.MaThongBao : '',
      MaKhachHang: data ? data.MaKhachHang : '',
      TenThongBao: data ? data.TenThongBao : '',
      NoiDung: data ? data.NoiDung : '',
      NgayThongBao: data ? data.NgayThongBao : ''
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
      <Input placeholder='Mã Thông Báo' name='MaThongBao' value={values.MaNXB} onChange={handleChange} />

      <Input placeholder='Mã Khách Hàng' name='MaKhachHang' value={values.TenNXB} onChange={handleChange} />

      <Input placeholder='Tên Thông Báo' name='TenThongBao' value={values.DiaChi} onChange={handleChange} />
      
      <Input placeholder='Nội dung' name='NoiDung' value={values.SoDienThoai} onChange={handleChange} />

      <Input placeholder='Ngày Thông Báo' name='NgayThongBao' value={values.Email} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa thông báo" : " Thêm thông báo"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);