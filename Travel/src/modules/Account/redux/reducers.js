import * as Types from "./constants";
import produce from "immer";
import { delCookie } from "base/helper/cookie";

const initialState = {
  authUser : localStorage.getItem('admin') ? localStorage.getItem('admin') : null
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOGIN_SUCCESS: {
        localStorage.setItem('admin', payload);
        draft.authUser = payload;
        break;
      }
      case Types.SIGNUP_SUCCESS: {
        draft.authUser = payload;
        break;
      }
      case Types.LOGOUT: {
        delCookie("token");
        sessionStorage.removeItem("USER");
        localStorage.removeItem("ADDRESS");
        draft.authUser = null;
        break;
      }
    }
  });
}
