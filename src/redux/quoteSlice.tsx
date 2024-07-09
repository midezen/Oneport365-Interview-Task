import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Quote } from "../models";

export interface QuoteState {
  quoteData: Quote[];
  singleQuoteData: Quote;
  loading: boolean;
  error: boolean;
}

const initialState: QuoteState = {
  quoteData: [],
  singleQuoteData: {
    _id: "",
    updatedAt: "",
    createdAt: "",
    __v: 0,
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
    getSingleQuoteStart: (state) => {
      state.loading = true;
    },
    getSingleQuoteSuccess: (state, action: PayloadAction<Quote>) => {
      state.singleQuoteData = action.payload;
      state.loading = false;
    },
    getSingleQuoteFailed: (state) => {
      state.error = true;
      state.loading = false;
    },

    getAllQuoteStart: (state) => {
      state.loading = true;
    },
    getAllQuoteSuccess: (state, action: PayloadAction<Quote[]>) => {
      state.quoteData = action.payload;
      state.loading = false;
    },
    getAllQuoteFailed: (state) => {
      state.error = true;
      state.loading = false;
    },

    createQuoteStart: (state) => {
      state.loading = true;
    },
    createQuoteSuccess: (state, action: PayloadAction<Quote>) => {
      state.singleQuoteData = action.payload;
      state.loading = false;
    },
    createQuoteFailed: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  getSingleQuoteStart,
  getSingleQuoteSuccess,
  getSingleQuoteFailed,
  getAllQuoteFailed,
  getAllQuoteStart,
  getAllQuoteSuccess,
  createQuoteFailed,
  createQuoteStart,
  createQuoteSuccess,
} = quoteSlice.actions;

export default quoteSlice.reducer;
