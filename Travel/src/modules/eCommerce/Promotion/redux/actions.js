import * as Types from './constants';

export const getListTime = () => {
    return {
        type: Types.GET_LIST_TIME,
    }
}

export const getListTimeSuccess = (data) => {
    return {
        type: Types.GET_LIST_TIME_SUCCESS,
        payload: data
    }
}

export const upDatenNotidication = (data) => {
    return {
      type: Types.UPDATE_NOTIFICATION,
      payload: data
    }
  }
  
export const deleteNotification = (data) => {
    return {
      type: Types.DELETE_NOTIFICATION,
      payload: data
    }
  }
  
export const addNotification = (data) => {
    return {
      type: Types.ADD_NOTIFICATION,
      payload: data
    }
}
