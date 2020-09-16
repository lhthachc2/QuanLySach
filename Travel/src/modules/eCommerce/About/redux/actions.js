import * as Types from './constants';

export const getListBook = () => {
  return {
    type: Types.GET_LIST_BOOK
  }
}

export const getListBookSuccess = (data) => {
  return {
    type: Types.GET_LIST_BOOK_SUCCESS,
    payload: data
  }
}

export const upDateBook = (data) => {
  return {
    type: Types.UPDATE_BOOK,
    payload: data
  }
}

export const deleteBook = (data) => {
  return {
    type: Types.DELETE_BOOK,
    payload: data
  }
}

export const addBook = (data) => {
  return {
    type: Types.ADD_BOOK,
    payload: data
  }
}
