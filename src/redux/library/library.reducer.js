import LIBRARY_ACTION_TYPES from "./library.types";

const INITIAL_STATE = {
  books: []
};

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case LIBRARY_ACTION_TYPES.SET_BOOKS:
      const newBooks = action.payload;
      return {
        ...currentState,
        books: newBooks,
      }
    case LIBRARY_ACTION_TYPES.UPDATE_BOOK:
      const updatedBook = action.payload;
      const books = currentState.books.concat([]);

      for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.id === updatedBook.id) {
          books[i] = updatedBook;
          break;
        }
      }
      
      return {
        ...currentState,
        books,
      }
    default:
      return currentState;
  }
};

export default libraryReducer;