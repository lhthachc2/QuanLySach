import * as Types from './constants';

export const getListTypeBook = () => {
    return {
        type: Types.GET_LIST_TYPE_BOOK,
    }
}

export const getListTypeBookSuccess = (data) => {
    return {
        type: Types.GET_LIST_TYPE_BOOK_SUCCESS,
        payload: data
    }
}
  
export const upDateTypeBook = (data) => {
    return {
      type: Types.UPDATE_TYPE_BOOK,
      payload: data
    }
  }
  
export const deleteTypeBook = (data) => {
    return {
      type: Types.DELETE_TYPE_BOOK,
      payload: data
    }
  }
export const addTypeBook = (data) => {
    return {
      type: Types.ADD_TYPE_BOOK,
      payload: data
    }
  }
