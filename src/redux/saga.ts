import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { getQuoteStart, getQuoteSuccess, getQuoteFailed } from "./quoteSlice";
import { Quote } from "../models";

const fetchQuoteApi = () =>
  axios.get<Quote>(
    "https://test-api.oneport365.com/api/admin/quotes/assessment/create"
  );

function* fetchQuote() {
  try {
    const response = yield call(fetchQuoteApi);
    yield put(getQuoteSuccess(response.data));
  } catch (e) {
    yield put(getQuoteFailed());
  }
}

function* watchFetchQuote() {
  yield takeLatest(getQuoteStart.type, fetchQuote);
}

export default watchFetchQuote;
