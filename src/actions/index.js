export function selectBook(book) {
  // selectBook is an action creator; it needs to return a usable action
  return ({
    type: 'BOOK_SELECTED',
    payload: book
  });
}

//'payload' just refers to the data that is passed along with the action type
