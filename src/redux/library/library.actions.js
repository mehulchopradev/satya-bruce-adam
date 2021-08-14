import LIBRARY_ACTION_TYPES from "./library.types"

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