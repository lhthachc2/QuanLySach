import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
const index = (props) => {
  const { id, data } = props;
  var initilalValue = {
    name: data ? data.ngayLap : '',
    price: data ? data.thanhTien : '',
    count: data ? data.giaBan : '',
  };
  const [values, setValues] = useState(initilalValue);

  useEffect(() => {
    setValues({
      name: data ? data.ngayLap : '',
      price: data ? data.thanhTien : '',
      count: data ? data.giaBan : ''
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
      <Input name='name' value={values.ngayLap} onChange={handleChange} />

      <Input name='count' value={values.thanhTien} onChange={handleChange} />

      <Input name='price' value={values.price} onChange={handleChange} />
      <div className="btn-update-pass">
        <Button
          onClick={() => handleSubmit()}
          style={{ marginTop: 20 }}
        >
          {id ? "Sửa hóa đơn" : " Thêm hóa đơn"}
        </Button>
      </div>
    </Form>
  )
}
export default (index);