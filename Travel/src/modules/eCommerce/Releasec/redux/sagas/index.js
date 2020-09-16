import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListReleaseSuccess, upDateRelease } from "../actions";
import { getReleaseListFromApi, updateReleaseFrmApi, deleteReleaseFrmApi, addReleaseFrmApi } from "./api";

function* getReleaseList() {
  try {
    yield delay(500, true);
    const response = yield call(getReleaseListFromApi);
    yield put(getListReleaseSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* updateRelease(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateReleaseFrmApi, data);
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

function* deleteRelease(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteReleaseFrmApi, data);
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

function* addRelease(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addReleaseFrmApi, data);
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

function* watchOnGetListRelease() {
  yield takeLatest(Types.GET_LIST_RELEASE, getReleaseList);
}

function* watchOnUpdateRelease() {
  yield takeLatest(Types.UPDATE_RELEASE, updateRelease);
}

function* watchOnDeleteRelease() {
  yield takeLatest(Types.DELETE_RELEASE, deleteRelease);
}

function* watchOnAddRelease() {
  yield takeLatest(Types.ADD_RELEASE, addRelease);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListRelease),
    fork(watchOnUpdateRelease),
    fork(watchOnDeleteRelease),
    fork(watchOnAddRelease)
  ]);
}
