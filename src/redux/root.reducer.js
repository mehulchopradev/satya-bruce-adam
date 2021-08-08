import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage
import todosReducer from "./todos.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todosReducer']
}

const rootReducer = combineReducers({
  // mini reducers (slices)
  todosReducer,
});

export default persistReducer(persistConfig, rootReducer);