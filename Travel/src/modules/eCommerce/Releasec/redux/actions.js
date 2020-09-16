import * as Types from './constants';

export const getListRelease = () => {
    return {
        type: Types.GET_LIST_RELEASE,
    }
}

export const getListReleaseSuccess = (data) => {
    return {
        type: Types.GET_LIST_RELEASE_SUCCESS,
        payload: data
    }
}

export const upDateRelease = (data) => {
    return {
      type: Types.UPDATE_RELEASE,
      payload: data
    }
  }
  
export const deleteRelease = (data) => {
    return {
      type: Types.DELETE_RELEASE,
      payload: data
    }
  }
  
export const addRelease = (data) => {
    return {
      type: Types.ADD_RELEASE,
      payload: data
    }
  }
