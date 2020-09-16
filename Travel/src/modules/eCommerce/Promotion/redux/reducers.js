import * as Types from './constants';
import produce from "immer";

const initialState = {
  timeList: []
}

export default function TimeReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_TIME_SUCCESS: {
        draft.timeList = payload
        break;
      }
    }
  })
}
