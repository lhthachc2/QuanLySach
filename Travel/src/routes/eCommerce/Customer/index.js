import React, { useEffect} from 'react';
import Customer from '../../../modules/eCommerce/Customer/';
import { useDispatch, useSelector } from 'react-redux';
import { getListKhachHang } from '../../../modules/eCommerce/Customer/redux/actions';
const index = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.CustomerReducer.customerList);
  useEffect(() => {
      dispatch(getListKhachHang())
  });
  return (
      <div>
          <Customer data={data} />
      </div>
  );
}

export default index;