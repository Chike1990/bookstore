import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  // additional reducers could be added here
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['books'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
);
const persist = persistStore(store);

export { store, persist };
