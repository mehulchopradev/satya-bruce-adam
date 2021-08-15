import LIBRARY_ACTION_TYPES from "./library.types"

import axios from "axios"

const URL = 'http://localhost:3002/books';

export const setBooks = (newBooks) => {
  return {
    type: LIBRARY_ACTION_TYPES.SET_BOOKS,
    payload: newBooks,
  }
}

export const updateBook = (updatedBook) => {
  return {
    type: LIBRARY_ACTION_TYPES.UPDATE_BOOK,
    payload: updatedBook,
  }
}

export const saveBook = (book) => {
  return {
    type: LIBRARY_ACTION_TYPES.NEW_BOOK,
    payload: book
  }
}

export const setBooksError = () => {
  return {
    type: LIBRARY_ACTION_TYPES.SET_BOOKS_ERROR
  }
}

export const fetchBooksAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
  
      const { data } = response;
      dispatch(setBooks(data));
    } catch (err) {
      dispatch(setBooksError());
    }
  }
}

export const fetchBookAsync = (bookId) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL}/${bookId}`);
    const { data } = response;

    dispatch(updateBook(data));
  }
}

export const createBookAsync = (newBook) => {
  return async (dispatch) => {
    const response = await axios.post(URL, newBook);
    const { data } = response;
    dispatch(saveBook(data)); 
  }
}