import React from "react";
import { withRouter, Redirect } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      query: ""
    });
    this.props.history.push(`/search/${this.state.query}`)
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="header-search">
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

export default withRouter(SearchBar);
