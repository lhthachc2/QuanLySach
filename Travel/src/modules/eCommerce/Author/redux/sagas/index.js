import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListAuthorSuccess } from "../actions";
import { getListAuthorFrmApi, updateAuthorFrmApi, deleteAuthorFrmApi, addAuthorFrmApi } from "./api";

function* getListAuthor() {
  try {
    yield delay(500, true);
    const response = yield call(getListAuthorFrmApi);
    yield put(getListAuthorSuccess(response.data))
  } catch (error) {
    console.log("error", error);
  }
}

function* updateAuthor(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateAuthorFrmApi, data);
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

function* deleteAuthor(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteAuthorFrmApi, data);
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

function* addAuthor(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addAuthorFrmApi, data);
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

function* watchOnGetListAuthor() {
  yield takeLatest(Types.GET_AUTHOR, getListAuthor);
}

function* watchOnUpdateAuthor() {
  yield takeLatest(Types.UPDATE_AUTHOR, updateAuthor);
}

function* watchOnDeleteAuthor() {
  yield takeLatest(Types.DELETE_AUTHOR, deleteAuthor);
}

function* watchOnAddAuthor() {
  yield takeLatest(Types.ADD_AUTHOR, addAuthor);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListAuthor),
    fork(watchOnUpdateAuthor),
    fork(watchOnDeleteAuthor),
    fork(watchOnAddAuthor)
  ]);
}
