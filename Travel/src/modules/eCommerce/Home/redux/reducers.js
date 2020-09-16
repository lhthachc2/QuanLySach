import * as Types from './constants';
import produce from "immer";

const initialState = {
  typeBookList: []
}

export default function HomeReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_TYPE_BOOK_SUCCESS: {
        draft.typeBookList = payload
        break;
      }
    }
  })
}
