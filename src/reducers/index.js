import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

//Redux is in charge of GLOBAL APPLICATION STATE (a plain javascript object)
//rootReducer adds a key called 'books' to the GLOBAL APPLICATION STATE

export default rootReducer;
