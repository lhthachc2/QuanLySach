import * as Types from './constants';

export const getListKhachHang = () => {
    return {
        type: Types.GET_LIST_KHACH_HANG,
    }
}

export const getListKhachHangSuccess = (data) => {
    return {
        type: Types.GET_LIST_KHACH_HANG_SUCCESS,
        payload: data
    }
}

export const upDateCustomer = (data) => {
    return {
      type: Types.UPDATE_CUSTOMER,
      payload: data
    }
  }
  
export const deleteCustomer = (data) => {
    return {
      type: Types.DELETE_CUSTOMER,
      payload: data
    }
  }
  
export const addCustomer = (data) => {
    return {
      type: Types.ADD_CUSTOMER,
      payload: data
    }
  }
