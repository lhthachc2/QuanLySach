import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { login } from "../redux/actions";
import './signin.less';
const FormItem = Form.Item;

const Index = props => {
  const dispatch = useDispatch();
  const handleSubmit = () =>{
     dispatch(login({account : 'info', callback:()=>{}, errorCallback:()=>{}}));
  }

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">ĐĂNG NHẬP</h1>
        </div>
        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem>
              <Input
                placeholder="Tài khoản/email"
              />
          </FormItem>
          <FormItem className="gx-mb-2">
         
              <Input
                type="password"
                placeholder="Mật khẩu"
              />
          </FormItem>
          <FormItem>
            <small>
              Tạo tài khoản mới tại{" "}
              <Link className="gx-text-primary" to="/account/signup">
                đây
              </Link>
            </small>
          </FormItem>
          <FormItem className="ft-form-ac gx-text-center">
            <Button
            onClick={handleSubmit}
              className="gx-btn-red"
              htmlType="submit"
              block
              type='default'
              style={{color : 'red'}}
            >
              Đăng nhập
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Index;
