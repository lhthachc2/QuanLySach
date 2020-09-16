import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListBookSuccess } from "../actions";
import { getListBookFrmApi, updateBookFrmApi, deleteBookFrmApi, addBookFrmApi } from "./api";

function* getListBook() {
  try {
    yield delay(500, true);
    const response = yield call(getListBookFrmApi);
    yield put(getListBookSuccess(response.data))
  } catch (error) {
    console.log("error", error);
  }
}

function* updateBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateBookFrmApi, data);
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

function* deleteBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteBookFrmApi, data);
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

function* addBook(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addBookFrmApi, data);
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

function* watchOnGetListBook() {
  yield takeLatest(Types.GET_LIST_BOOK, getListBook);
}

function* watchOnUpdateBook() {
  yield takeLatest(Types.UPDATE_BOOK, updateBook);
}

function* watchOnDeleteBook() {
  yield takeLatest(Types.DELETE_BOOK, deleteBook);
}

function* watchOnAddBook() {
  yield takeLatest(Types.ADD_BOOK, addBook);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListBook),
    fork(watchOnUpdateBook),
    fork(watchOnDeleteBook),
    fork(watchOnAddBook)
  ]);
}
