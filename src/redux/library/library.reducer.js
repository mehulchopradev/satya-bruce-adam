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
    default:
      return currentState;
  }
};

export default libraryReducer;