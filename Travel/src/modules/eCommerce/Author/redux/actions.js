import * as Types from './constants';

export const getListAuthor = () => {
  return {
    type: Types.GET_AUTHOR
  }
}

export const getListAuthorSuccess = (data) => {
  return {
    type: Types.GET_AUTHOR_SUCCESS,
    payload: data
  }
}

export const upDateAuthor = (data) => {
  return {
    type: Types.UPDATE_AUTHOR,
    payload: data
  }
}

export const deleteAuthor = (data) => {
  return {
    type: Types.DELETE_AUTHOR,
    payload: data
  }
}

export const addAuthor = (data) => {
  return {
    type: Types.ADD_AUTHOR,
    payload: data
  }
}
