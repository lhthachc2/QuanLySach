import React, { useState, useEffect } from 'react';
import Promotion from '../../../modules/eCommerce/Promotion';
import { useDispatch, useSelector } from 'react-redux';
import { getListTime } from '../../../modules/eCommerce/Promotion/redux/actions';

const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.TimeReducer.timeList);
    useEffect(() => {
        dispatch(getListTime())
    }, []);  
    return (
        <div>
            <Promotion data={data} />
        </div>
    );
}
export default index;