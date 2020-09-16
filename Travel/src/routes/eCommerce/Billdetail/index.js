import React, { useState, useEffect } from 'react';
import Billdetail from '../../../modules/eCommerce/Billdetail';
import { getListBillDetail } from '../../../modules/eCommerce/Billdetail/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.BillDetailReducer.billDetailList);
    useEffect(() => {
        dispatch(getListBillDetail())
    });
    return (
        <div>
            <Billdetail data={data} />
        </div>
    );
}
export default index;