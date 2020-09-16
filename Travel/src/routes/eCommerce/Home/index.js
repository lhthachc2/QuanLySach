import React, { useEffect} from 'react';
import Home from '../../../modules/eCommerce/Home/';
import { useDispatch, useSelector } from 'react-redux';
import { getListTypeBook } from '../../../modules/eCommerce/Home/redux/actions';
const index = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.HomeReducer.typeBookList);
  useEffect(() => {
      dispatch(getListTypeBook())
  }, []);
  return (
      <div>
          <Home data={data} />
      </div>
  );
}

export default index;