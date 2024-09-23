import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookSlise = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    add_book: (state, action) => {
      //state.push(action.payload)
      return [...state, action.payload];
    },
    delete_book: (state, action) => {
      return state.filter((book) => {
        return book.id !== action.payload;
      });
    },
    toggle_favorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      // return state.map((book) => {
      //   return book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book;
      // });
    },
  },
});

export const selectBook = (state) => state.books;
export const { add_book, delete_book, toggle_favorite } = bookSlise.actions;

export default bookSlise.reducer;
