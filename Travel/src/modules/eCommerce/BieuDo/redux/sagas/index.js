import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from "../constants";
import { getListReveneuSuccess, getListTypeProductSucces } from "../actions";
import { getReveneuFrmApi, getTypeProductListFromApi } from "./api";
import moment from 'moment'

function* getReveneuList(action) {
  const { payload } = action;
  try {
    yield delay(500, true);
    const response = yield call(getReveneuFrmApi, payload);
    yield put(getListReveneuSuccess(convertData(response.data)));
  } catch (error) {
    console.log("List slide", error);
  }
}
function* watchOnGetListTypeBook() {
  yield takeLatest(Types.GET_LIST_REVENEU, getReveneuList);
}

function* getTypeProductList() {
  try {
    yield delay(500, true);
    const response = yield call(getTypeProductListFromApi);
    yield put(getListTypeProductSucces(response.data));
  } catch (error) {
    console.log("List slide", error);
  }
}

function* watchOnGetListTypeProduct() {
  yield takeLatest(Types.GET_LIST_TYPE_PRODUCT, getTypeProductList);
}

export default function* rootSaga() {
  yield all([fork(watchOnGetListTypeBook), fork(watchOnGetListTypeProduct)]);
}

const convertData = (list) => {
  return list.map((item) => {
    return {
      ngay: moment(item.ngay).format('DD/MM'),
      doanhThu: item.doanhThu,
    }
  })
}