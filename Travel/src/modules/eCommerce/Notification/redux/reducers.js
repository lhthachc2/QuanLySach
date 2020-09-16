import * as Types from './constants';
import produce from "immer";

const initialState = {
  infoList: []
}

export default function InfoReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_INFO_SUCCESS: {
        draft.infoList = payload
        break;
      }
    }
  })
}
