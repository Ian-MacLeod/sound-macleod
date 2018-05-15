import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(e) {
    e.preventDefault();
    this.props.performSearch(this.state.query);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.performSearch} className="header-search">
        <input
          onChange={this.handleChange}
          name="query"
          className="search-bar"
          type="text"
          value={this.state.query}
        />
      </form>
    );
  }
}

export default SearchBar;
