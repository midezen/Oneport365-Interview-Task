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
    getQuoteStart: (state: any) => {
      state.loading = true;
    },
    getQuoteSuccess: (state: any, action: PayloadAction<Quote>) => {
      state.quote = action.payload;
      state.loading = false;
    },
    getQuoteFailed: (state: any) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { getQuoteStart, getQuoteSuccess } = quoteSlice.actions;

export default quoteSlice.reducer;
