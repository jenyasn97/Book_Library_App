import { configureStore } from "@reduxjs/toolkit";
import filterReduser from "./slices/filterSlice";
import booksReducer from "./slices/booksSlice";
import errorReducer from "./slices/errorSlice";
const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReduser,
    error: errorReducer,
  },
});

export default store;
