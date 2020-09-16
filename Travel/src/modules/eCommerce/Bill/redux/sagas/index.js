import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListBillSuccess, upDateBill } from "../actions";
import { getBillListFrmApi, updateBillFrmApi, deleteBillFrmApi, addBillFrmApi } from "./api";

function* getBillList() {
  try {
    yield delay(500, true);
    const response = yield call(getBillListFrmApi);
    yield put(getListBillSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* updateBill(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(updateBillFrmApi, data);
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

function* deleteBill(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(deleteBillFrmApi, data);
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

function* addBill(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addBillFrmApi, data);
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

function* watchOnGetListBill() {
  yield takeLatest(Types.GET_LIST_BILL, getBillList);
}

function* watchOnUpdateBill() {
  yield takeLatest(Types.UPDATE_BILL, updateBill);
}

function* watchOnDeleteBill() {
  yield takeLatest(Types.DELETE_BILL, deleteBill);
}

function* watchOnAddBill() {
  yield takeLatest(Types.ADD_BILL, addBill);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetListBill),
    fork(watchOnUpdateBill),
    fork(watchOnDeleteBill),
    fork(watchOnAddBill)
  ]);
}
