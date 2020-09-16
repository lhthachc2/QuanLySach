import * as Types from './constants';
import produce from "immer";

const initialState = {
  listBook: []
}

export default function BookReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_LIST_BOOK_SUCCESS: {
        draft.listBook = payload;
        break;
      }
    }
  })
}
