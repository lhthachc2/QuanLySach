import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import { GET_LIST_BILLDETAIL, ADD_BILL_DETAIL } from "../constants";
import { getListBillDetailSuccess } from "../actions";
import { getBillDetailListFrmApi, addBillDetailFrmApi } from "./api";

function* getBillDetailList() {
  try {
    yield delay(500, true);
    const response = yield call(getBillDetailListFrmApi);
    yield put(getListBillDetailSuccess(response.data));
  } catch (error) {
    console.log("List slide", error);
    yield payload.onError()
  }
}

function* addBillDetail(action) {
  const { callback, data, errorCallback } = action.payload;
  try {
    yield delay(500, true);
    const response = yield call(addBillDetailFrmApi, data);
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

function* watchOnGetBillDetailList() {
  yield takeLatest(GET_LIST_BILLDETAIL, getBillDetailList);
}

function* watchOnAddBillDetail() {
  yield takeLatest(ADD_BILL_DETAIL, addBillDetail);
}

export default function* rootSaga() {
  yield all([fork( watchOnGetBillDetailList), fork( watchOnAddBillDetail)]);
}
