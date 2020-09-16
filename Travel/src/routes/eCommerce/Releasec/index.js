import React, { useState, useEffect } from 'react';
import Releasec from '../../../modules/eCommerce/Releasec';
import { useDispatch, useSelector } from 'react-redux';
import { getListRelease } from '../../../modules/eCommerce/Releasec/redux/actions';

const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.ReleaseReducer.releaseList);
    useEffect(() => {
        dispatch(getListRelease())
    },);  
    return (
        <div>
            <Releasec data={data} />
        </div>
    );
}
export default index;