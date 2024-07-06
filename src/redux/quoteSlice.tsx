import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Quote } from "../models";

export interface QuoteState {
  quoteData: Quote;
  loading: boolean;
  error: boolean;
}

const initialState: QuoteState = {
  quoteData: {
    quote_title: "",
    quote_date: "",
    sections: [],
  },
  loading: false,
  error: false,
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    getQuoteStart: (state) => {
      state.loading = true;
    },
    getQuoteSuccess: (state, action: PayloadAction<Quote>) => {
      state.quoteData = action.payload;
      state.loading = false;
    },
    getQuoteFailed: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { getQuoteStart, getQuoteSuccess, getQuoteFailed } =
  quoteSlice.actions;

export default quoteSlice.reducer;
