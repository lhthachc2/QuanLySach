import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaSach: data ? data.MaSach : '',
    TenSach: data ? data.TenSach : '',
    SoTrang: data ? data.SoTrang : '',
    NgayXuatBan: data ? data.NgayXuatBan : '',
    KichThuoc: data ? data.KichThuoc : '',
    LoaiBia: data ? data.LoaiBia : '',
    SoLuong: data ? data.SoLuong : '',
    GiaBan: data ? data.GiaBan : '',
    GiamGia: data ? data.GiamGia : '',
    TinhTrang: data ? data.TinhTrang : '',
    GhiChu: data ? data.GhiChu : '',
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaSach: data ? data.MaSach : '',
      TenSach: data ? data.TenSach : '',
      SoTrang: data ? data.SoTrang : '',
      NgayXuatBan: data ? data.NgayXuatBan : '',
      KichThuoc: data ? data.KichThuoc : '',
      LoaiBia: data ? data.LoaiBia : '',
      SoLuong: data ? data.SoLuong : '',
      GiaBan: data ? data.GiaBan : '',
      GiamGia: data ? data.GiamGia : '',
      TinhTrang: data ? data.TinhTrang : '',
      GhiChu: data ? data.GhiChu : '',
    });
  }, [id]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    props.handleSubmit(values);
    setValues(initilalValue);
  };

  return (
    <Form onSubmit={() => handleSubmit()}>
      <Input placeholder='Mã Sách' name='MaSach' value={values.MaSach} onChange={handleChange} />
      <Input placeholder='Tên Sách' name='TenSach' value={values.TenSach} onChange={handleChange} />
      <Input placeholder='Số trang' name='SoTrang' value={values.SoTrang} onChange={handleChange} />
      <Input placeholder='Năm Xuất Bản' name='NgayXuatBan' value={values.NgayXuatBan} onChange={handleChange} />
      <Input placeholder='Kích Thước' name='KichThuoc' value={values.KichThuoc} onChange={handleChange} />
      <Input placeholder='Loại Bìa' name='LoaiBia' value={values.LoaiBia} onChange={handleChange} />
      <Input placeholder='Số lượng' name='SoLuong' value={values.SoLuong} onChange={handleChange} />
      <Input placeholder='Giá Bán' name='GiaBan' value={values.GiaBan} onChange={handleChange} />
      <Input placeholder='Giảm giá' name='GiamGia' value={values.GiamGia} onChange={handleChange} />
      <Input placeholder='Tình Trạng' name='TinhTrang' value={values.TinhTrang} onChange={handleChange} />
      <Input placeholder='Ghi Chú' name='GhiChu' value={values.GhiChu} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa sách" : " Thêm sách"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);