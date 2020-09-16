import * as Types from './constants';

export const getListBill = () => {
    return {
        type: Types.GET_LIST_BILL,
    }
}

export const getListBillSuccess = (data) => {
    return {
        type: Types.GET_LIST_BILL_SUCCESS,
        payload: data
    }
}

export const upDateBill = (data) => {
    return {
      type: Types.UPDATE_BILL,
      payload: data
    }
  }
  
export const deleteBill = (data) => {
    return {
      type: Types.DELETE_BILL,
      payload: data
    }
  }
  
export const addBill = (data) => {
    return {
      type: Types.ADD_BILL,
      payload: data
    }
  }