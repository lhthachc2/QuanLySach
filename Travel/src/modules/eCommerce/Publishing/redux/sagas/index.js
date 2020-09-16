import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListPublishingSuccess } from "../actions";
import { getPublishingListFromApi, updatePublishingFrmApi, deletePublishingFrmApi, addPublishingFrmApi } from "./api";

function* getPublishingList() {
  try {
    yield delay(500, true);
    const response = yield call(getPublishingListFromApi);
    yield put(getListPublishingSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* updatePublishing(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updatePublishingFrmApi, data);
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

function* deletePublishing(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deletePublishingFrmApi, data);
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

function* addPublishing(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addPublishingFrmApi, data);
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
  yield takeLatest(Types.GET_LIST_PUBLISHING, getPublishingList);
}

function* watchOnUpdatePublishing() {
  yield takeLatest(Types.UPDATE_PUBLISHING, updatePublishing);
}

function* watchOnDeletePublishing() {
  yield takeLatest(Types.DELETE_PUBLISHING, deletePublishing);
}

function* watchOnAddPublishing() {
  yield takeLatest(Types.ADD_PUBLISHING, addPublishing);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListPublishing),
    fork(watchOnUpdatePublishing),
    fork(watchOnDeletePublishing),
    fork(watchOnAddPublishing)
  ]);
}
