import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

//this reducer adds a key called 'books' to the GLOBAL APPLICATION STATE

export default rootReducer;
