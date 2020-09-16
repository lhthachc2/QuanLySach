import * as Types from './constants';
import produce from "immer";

const initialState = {
  customerList: []
}
export default function CustomerReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_KHACH_HANG_SUCCESS: {
        draft.customerList = payload
        break;
      }
    }
  })
}
