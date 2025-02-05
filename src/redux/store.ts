import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import productReducer from "./product";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    products: productReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
