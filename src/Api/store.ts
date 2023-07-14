import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
