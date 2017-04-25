import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)



// a component is "dumb" if it has no connection to redux
// a container (or a "smart" component) is a component that has direct access to the state provided
  // by redex
//react-redux is a third library used to form a bridge between react
  // and redux libraries
