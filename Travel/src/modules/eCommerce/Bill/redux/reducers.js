import * as Types from './constants';
import produce from "immer";

const initialState = {
  billList: []
}

export default function BillReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_BILL_SUCCESS: {
        draft.billList = payload
        break;
      }
    }
  })
}
