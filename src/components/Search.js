import React, { Component } from 'react';

export class Search extends Component {
  submitSearch = e => {
    e.preventDefault();
    if (this.query.value) {
      this.props.onSearch(this.query.value);
      e.currentTarget.reset();
    }
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <input
          type="search"
          placeholder="Search..."
          ref={input => (this.query = input)}
        />
        <button type="submit">Get Pictures</button>
      </form>
    );
  }
}
