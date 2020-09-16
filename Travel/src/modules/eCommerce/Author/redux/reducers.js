import * as Types from './constants';
import produce from "immer";

const initialState = {
  listAuthor: []
}

export default function AuthorReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_AUTHOR_SUCCESS: {
        draft.listAuthor = payload;
        break;
      }
    }
  })
}
