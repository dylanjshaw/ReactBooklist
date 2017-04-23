import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList)



//a component is "dumb" if it has no connection to redux
// a container (or a "smart" component) is a component that has direct access to the state provided
  // by redex
//react-redux is a third library used to form a bridge between react
  // and redux libraries
