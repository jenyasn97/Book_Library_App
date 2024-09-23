import { configureStore } from "@reduxjs/toolkit";
import filterReduser from "./slices/filterSlice";
import booksReducer from "./slices/booksSlice";
const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReduser,
  },
});

export default store;
