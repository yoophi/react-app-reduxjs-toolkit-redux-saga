import {
  LoadFailPayload,
  LoadPayload,
  LoadSuccessPayload,
  UnsplashState,
} from "./types";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./../../store/index";

const initialState = {
  isLoading: false,
  images: [],
  error: null,
};

const reducers = {
  load: (state: UnsplashState, payload: PayloadAction<LoadPayload>) => {
    state.isLoading = true;
  },
  loadSuccess: (
    state: UnsplashState,
    { payload: images }: PayloadAction<LoadSuccessPayload>
  ) => {
    state.isLoading = false;
    state.images = images;
  },
  loadFail: (
    state: UnsplashState,
    { payload: error }: PayloadAction<LoadFailPayload>
  ) => {
    state.isLoading = false;
    state.error = error;
  },
};

const name = "UNSPLASH";

export const unsplashSlice = createSlice({
  name,
  initialState,
  reducers,
});

const selectAllState = createSelector(
  (state: UnsplashState) => state.isLoading,
  (state: UnsplashState) => state.images,
  (state: UnsplashState) => state.error,
  (isLoading, images, error) => {
    return {
      isLoading,
      images,
      error,
    };
  }
);

export const unsplashSelector = {
  all: (state: RootState) => selectAllState(state[unsplashSlice.name]),
};

export const unsplashAction = unsplashSlice.actions;
