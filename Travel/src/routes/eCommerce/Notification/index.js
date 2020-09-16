import React, { useEffect } from 'react';
import Notification from '../../../modules/eCommerce/Notification';
import { getListInfo } from '../../../modules/eCommerce/Notification/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.InfoReducer.infoList);
    useEffect(() => {
        dispatch(getListInfo())
    });
    return (
        <div>
            <Notification data={data} />
        </div>
    );
}
export default index;