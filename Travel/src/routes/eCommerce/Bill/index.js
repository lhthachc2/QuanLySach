import React, { useState, useEffect } from 'react';
import Bill from '../../../modules/eCommerce/Bill';
import { useDispatch, useSelector } from 'react-redux';
import { getListBill } from '../../../modules/eCommerce/Bill/redux/actions';
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.BillReducer.billList);
    useEffect(() => {
        dispatch(getListBill())
    },[data]);
    return (
        <div>
            <Bill data={data} />
        </div>
    );
}
export default index;