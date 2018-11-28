import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { query: "" };
  }

  handleChange = e => {
    const query = e.target.value;
    this.setState({query});
    this.props.onSearchQueryChange(query);
  }

  render() {
    return (
      <input
        className="search-bar col-md-10 offset-md-1 my-5"
        type="text"
        placeholder="Search"
        value={this.state.query}
        onChange={this.handleChange}
        autoFocus required />
    );
  }
}

export default SearchBar;