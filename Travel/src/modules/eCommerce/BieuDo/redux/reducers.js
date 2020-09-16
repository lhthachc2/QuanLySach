import * as Types from './constants';
import produce from "immer";

const initialState = {
  typeReveneuList: [],
  typeTypeProductList: []
}


export default function ReveneuReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_REVENEU_SUCCESS: {
        draft.typeReveneuList = payload
        break;
      }
      case Types.GET_LIST_TYPE_PRODUCT_SUCCESS: {
        draft.typeTypeProductList = payload
        break;
      }
    }
  })
}