import React, { useState, useEffect } from 'react';
import Publishing from '../../../modules/eCommerce/Publishing';
import { useDispatch, useSelector } from 'react-redux';
import { getListPublishing } from '../../../modules/eCommerce/Publishing/redux/actions';

const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.PublishingReducer.publishingList);
    useEffect(() => {
        dispatch(getListPublishing())
    });
    return (
        <div>
            <Publishing data={data} />
        </div>
    );
}
export default index;