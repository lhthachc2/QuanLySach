import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListTypeBookSuccess } from "../actions";
import { getTypeBookListFromApi, updateTypeBookFrmApi, deleteTypeBookFrmApi, addTypeBookFrmApi } from "./api";

function* getTypeBookList() {
  try {
    yield delay(500, true);
    const response = yield call(getTypeBookListFromApi);
    yield put(getListTypeBookSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* updateTypeBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateTypeBookFrmApi, data);
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

function* deleteTypeBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteTypeBookFrmApi, data);
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

function* addTypeBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addTypeBookFrmApi, data);
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

function* watchOnGetListTypeBook() {
  yield takeLatest(Types.GET_LIST_TYPE_BOOK, getTypeBookList);
}

function* watchOnUpdateTypeBook() {
  yield takeLatest(Types.UPDATE_TYPE_BOOK, updateTypeBook);
}

function* watchOnDeleteTypeBook() {
  yield takeLatest(Types.DELETE_TYPE_BOOK, deleteTypeBook);
}

function* watchOnAddTypeBook() {
  yield takeLatest(Types.ADD_TYPE_BOOK, addTypeBook);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListTypeBook),
    fork(watchOnUpdateTypeBook),
    fork(watchOnDeleteTypeBook),
    fork(watchOnAddTypeBook)
  ]);
}
