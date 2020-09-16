import * as Types from './constants';

export const getListPublishing = () => {
    return {
        type: Types.GET_LIST_PUBLISHING,
    }
}

export const getListPublishingSuccess = (data) => {
    return {
        type: Types.GET_LIST_PUBLISHING_SUCCESS,
        payload: data
    }
}

export const upDatePublishing = (data) => {
    return {
      type: Types.UPDATE_PUBLISHING,
      payload: data
    }
  }
  
export const deletePublishing = (data) => {
    return {
      type: Types.DELETE_PUBLISHING,
      payload: data
    }
  }
  
export const addPublishing = (data) => {
    return {
      type: Types.ADD_PUBLISHING,
      payload: data
    }
}
