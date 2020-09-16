import * as Types from './constants';
import produce from "immer";

const initialState = {
  billDetailList: []
}

export default function BillDetailReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_BILLDETAIL_SUCCESS: {
        draft.billDetailList = payload
        break;
      }
    }
  })
}
