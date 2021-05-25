import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { unsplashSlice } from "./../features/ImageGrid/slice";
import { watchUnsplash } from "../features/ImageGrid/saga";

export const rootReducer = combineReducers({
  [unsplashSlice.name]: unsplashSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watchUnsplash()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
export type RootState = ReturnType<typeof rootReducer>;
