import * as Types from './constants';
import produce from "immer";

const initialState = {
  releaseList: []
}

export default function ReleaseReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_RELEASE_SUCCESS: {
        draft.releaseList = payload
        break;
      }
    }
  })
}
