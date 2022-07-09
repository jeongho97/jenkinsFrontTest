import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./users";
// import pageReducer from "./page";
import paperReducer from "./paper";
import gifts from "./gifts";
import boards from "./board";
import { watchGetGifts } from "./giftSaga";
import { watchGetPaper } from "./paperSaga";
import { all } from "redux-saga/effects";
import { watchGetUser } from "./userSaga";
import { watchGetAPI } from "./AuthSaga";
import apiReducer from "./Auths";
import { watchGetBoards } from "./boardSaga";
import commentReducer from "./comment";
import { watchGetComment } from "./commentSaga";

const reducer = combineReducers({
  user: userReducer,
  // page: pageReducer,
  paper: paperReducer,
  api: apiReducer,
  comment: commentReducer,
  gifts,
  boards,
});
const sagaMiddleware = createSagaMiddleware();
const defaultMiddleware = getDefaultMiddleware();
function* rootSaga() {
  yield all([watchGetPaper(), watchGetGifts(), watchGetUser(), watchGetAPI(), watchGetBoards(), watchGetComment()]);
}
// export const store = configureStore({
//   reducer,
//   devTools: true,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
// });
const createStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
    middleware: [...defaultMiddleware, sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
export default createStore;
export type RootState = ReturnType<typeof reducer>;
