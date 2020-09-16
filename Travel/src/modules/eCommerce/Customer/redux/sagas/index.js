import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants"
import {  getListKhachHangSuccess } from "../actions";
import { getCustomerListFromApi, updateCustomerFrmApi, deleteCustomerFrmApi, addCustomerFrmApi } from "./api";

function* getCustomerList() {
  try {
    yield delay(500, true);
    const response = yield call(getCustomerListFromApi);
    yield put(getListKhachHangSuccess(response.data));
  } catch (error) {
    yield payload.onError()
  }
}

function* updateCustomer(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateCustomerFrmApi, data);
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

function* deleteCustomer(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteCustomerFrmApi, data);
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

function* addCustomer(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addCustomerFrmApi, data);
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

function* watchOnGetCustomerList() {
  yield takeLatest(Types.GET_LIST_KHACH_HANG, getCustomerList);
}

function* watchOnUpdateCustomer() {
  yield takeLatest(Types.UPDATE_CUSTOMER, updateCustomer);
}

function* watchOnDeleteCustomer() {
  yield takeLatest(Types.DELETE_CUSTOMER, deleteCustomer);
}

function* watchOnAddCustomer() {
  yield takeLatest(Types.ADD_CUSTOMER, addCustomer);
}

export default function* rootSaga() {
  yield all([
  fork(watchOnGetCustomerList),
  fork(watchOnUpdateCustomer),
  fork(watchOnDeleteCustomer),
  fork(watchOnAddCustomer)]);
}
