import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListTimeSuccess } from "../actions";
import { getTimeListFromApi, updateNotificationFrmApi, deleteNotificationFrmApi, addNotificationFrmApi } from "./api";

function* getTimeList() {
  try {
    yield delay(500, true);
    const response = yield call(getTimeListFromApi);
    yield put(getListTimeSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* updateNotification(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateNotificationFrmApi, data);
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

function* deleteNotification(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteNotificationFrmApi, data);
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

function* addNotification(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addNotificationFrmApi, data);
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

function* watchOnGetListPublishing() {
  yield takeLatest(Types.GET_LIST_TIME, getTimeList);
}

function* watchOnUpdateNotification() {
  yield takeLatest(Types.UPDATE_NOTIFICATION, updateNotification);
}

function* watchOnDeleteNotification() {
  yield takeLatest(Types.DELETE_NOTIFICATION, deleteNotification);
}

function* watchOnAddNotification() {
  yield takeLatest(Types.ADD_NOTIFICATION, addNotification);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListPublishing),
    fork(watchOnUpdateNotification),
    fork(watchOnDeleteNotification),
    fork(watchOnAddNotification)
  ]);
}
