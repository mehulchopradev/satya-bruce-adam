import LIBRARY_ACTION_TYPES from "./library.types";

const INITIAL_STATE = {
  books: [],
  isBooksLoaded: false,
  isError: false
};

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case LIBRARY_ACTION_TYPES.SET_BOOKS:
      const newBooks = action.payload;
      return {
        ...currentState,
        books: newBooks,
        isBooksLoaded: true
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
    case LIBRARY_ACTION_TYPES.NEW_BOOK:
      const newBook = action.payload;
      return {
        ...currentState,
        books: currentState.books.concat([newBook])
      }
    case LIBRARY_ACTION_TYPES.SET_BOOKS_ERROR:
      return {
        ...currentState,
        isError: true
      }
    default:
      return currentState;
  }
};

export default libraryReducer;