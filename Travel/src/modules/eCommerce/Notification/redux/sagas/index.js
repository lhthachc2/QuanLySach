import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListInfoSuccess } from "../actions";
import { getInfoListFromApi, postNotificationFrmApi } from "./api";

function* getInfoList() {
  try {
    yield delay(500, true);
    const response = yield call(getInfoListFromApi);
    yield put(getListInfoSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}
function* postNotification(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(postNotificationFrmApi, data);
    console.log(response)
    switch (response.data.status_code) {
      case 200: {
        yield callback(response.data.status_code, response.data.message);
        break;
      }
      case 0: {
        yield callback(response.data.status_code, response.data.message);
        break;
      }
      default: {
        yield errorCallback(response.data.message);
        break;
      }
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* watchOnGetListInfo() {
  yield takeLatest(Types.GET_LIST_INFO, getInfoList);
}

function* watchOnPostNotification() {
  yield takeLatest(Types.POST_NOTIFICATION, postNotification);
}

export default function* rootSaga() {
  yield all([fork(watchOnGetListInfo), fork(watchOnPostNotification)]);
}
