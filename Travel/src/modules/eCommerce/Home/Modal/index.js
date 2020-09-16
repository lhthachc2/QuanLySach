import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    MaTheLoai: data ? data.MaTheLoai : '',
    TenTheLoai: data ? data.TenTheLoai : ''
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      MaTheLoai: data ? data.MaTheLoai : '',
      TenTheLoai: data ? data.TenTheLoai : ''
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
      <Input placeholder='Mã Thể Loại' name='MaTheLoai' value={values.MaTheLoai} onChange={handleChange} />

      <Input placeholder='Tên Thể Loại' name='TenTheLoai' value={values.TenTheLoai} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa thể loại" : " Thêm thể loại"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);