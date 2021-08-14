import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage
import todosReducer from "./todos.reducer";
import libraryReducer from "./library/library.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todosReducer']
}

const rootReducer = combineReducers({
  // mini reducers (slices)
  todosReducer,
  libraryReducer,
});

export default persistReducer(persistConfig, rootReducer);