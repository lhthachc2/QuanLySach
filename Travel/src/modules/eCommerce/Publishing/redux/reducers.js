import * as Types from './constants';
import produce from "immer";

const initialState = {
  publishingList: []
}

export default function PublishingReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_PUBLISHING_SUCCESS: {
        draft.publishingList = payload
        break;
      }
    }
  })
}
