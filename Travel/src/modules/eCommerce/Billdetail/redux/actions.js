import * as Types from './constants';

export const getListBillDetail = () => {
    return {
        type: Types.GET_LIST_BILLDETAIL,
    }
}
export const getListBillDetailSuccess = (data) => {
    return {
        type: Types.GET_LIST_BILLDETAIL_SUCCESS,
        payload: data
    }
}

export const addBillDetail = (data) => {
    return {
      type: Types.ADD_BILL_DETAIL,
      payload: data
    }
  }