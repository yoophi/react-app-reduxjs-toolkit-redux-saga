import { call, put, takeLatest } from "@redux-saga/core/effects";

import { LoadPayload } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import { getSplashImage } from "../../api";
import { unsplashAction } from "./slice";

function* handleImageLoad(
  action: PayloadAction<LoadPayload>
): Generator<any, void, void> {
  const { key, page } = action.payload;
  const { loadSuccess, loadFail } = unsplashAction;
  try {
    const images = yield call(getSplashImage, page, key);
    //@ts-ignore
    yield put(loadSuccess(images));
  } catch (err) {
    yield put(loadFail(err));
  }
}

export function* watchUnsplash() {
  const { load } = unsplashAction;
  yield takeLatest(load, handleImageLoad);
}
