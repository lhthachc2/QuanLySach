import React, { useState, useEffect } from 'react';
import About from '../../../modules/eCommerce/About';
import { getListBook } from '../../../modules/eCommerce/About/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.AboutReducer.listBook);
    useEffect(() => {
        dispatch(getListBook())
    });
    return (
        <div>
            <About data={data} />
        </div>
    );
}
export default index;