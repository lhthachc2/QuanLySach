import * as Types from './constants';

export const getListReveneu = (data) => {
  return {
    type: Types.GET_LIST_REVENEU,
    payload: data
  }
}
export const getListReveneuSuccess = (data) => {
  return {
    type: Types.GET_LIST_REVENEU_SUCCESS,
    payload: data
  }
}
export const getListTypeProduct = () => {
  return {
    type: Types.GET_LIST_TYPE_PRODUCT,
  }
}
export const getListTypeProductSucces = (data) => {
  return {
    type: Types.GET_LIST_TYPE_PRODUCT_SUCCESS,
    payload: data,
  }
}