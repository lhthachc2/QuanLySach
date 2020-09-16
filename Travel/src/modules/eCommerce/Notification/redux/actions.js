import * as Types from './constants';

export const getListInfo = () => {
    return {
        type: Types.GET_LIST_INFO,
    }
}

export const getListInfoSuccess = (data) => {
    return {
        type: Types.GET_LIST_INFO_SUCCESS,
        payload: data
    }
}
export const postNotification = (data) => {
  return {
    type: Types.POST_NOTIFICATION,
    payload: data
  }
}
