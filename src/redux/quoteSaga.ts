import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

import {
  createQuoteFailed,
  createQuoteStart,
  createQuoteSuccess,
  getAllQuoteFailed,
  getAllQuoteStart,
  getAllQuoteSuccess,
  getSingleQuoteFailed,
  getSingleQuoteStart,
  getSingleQuoteSuccess,
} from "./quoteSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* getSingleQuote() {
  try {
    const response = yield call(
      axios.get,
      "https://test-api.oneport365.com/api/admin/quotes/assessment/get_single_quote/666e597045f4385cd91ea351"
    );
    yield put(getSingleQuoteSuccess(response.data.data));
    console.log(response.data.data);
  } catch (error: any) {
    yield put(getSingleQuoteFailed(error));
  }
}

function* getAllQuotes() {
  try {
    const response = yield call(
      axios.get,
      "https://test-api.oneport365.com/api/admin/quotes/assessment/get?start_date=2024-06-01T00:00:00.000Z&end_date=2024-06-18T10:00:00.000Z"
    );
    yield put(getAllQuoteSuccess(response.data.data));
    console.log(response);
  } catch (error: any) {
    yield put(getAllQuoteFailed(error));
    console.log(error);
  }
}

function* createQuote(action: PayloadAction<string>) {
  try {
    const response = yield call(
      axios.post,
      "https://test-api.oneport365.com/api/admin/quotes/assessment/create",
      action.payload
    );
    yield put(createQuoteSuccess(response.data.data));
    console.log(response.data.data);
  } catch (error: any) {
    put(createQuoteFailed(error));
    console.log(error);
  }
}

export function* quoteSaga() {
  yield takeLatest(getSingleQuoteStart.type, getSingleQuote);
  yield takeLatest(getAllQuoteStart.type, getAllQuotes);
  yield takeLatest(createQuoteStart.type, createQuote);
}
