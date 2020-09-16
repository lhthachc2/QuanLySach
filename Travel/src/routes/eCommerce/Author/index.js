import React, { useState, useEffect } from 'react';
import Author from '../../../modules/eCommerce/Author';
import { useDispatch, useSelector } from 'react-redux';
import { getListAuthor } from '../../../modules/eCommerce/Author/redux/actions';
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.AuthorReducer.listAuthor);
    console.log("value123",data)
    useEffect(() => {
        dispatch(getListAuthor())
    });
    return (
        <div>
            <Author data={data} />
        </div>
    );
}
export default index;