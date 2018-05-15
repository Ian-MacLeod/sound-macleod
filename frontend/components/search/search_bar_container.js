import { connect } from "react-redux";

import { performSearch } from "../../actions/search_actions";
import SearchBar from "./search_bar";

const mapDispatchToProps = dispatch => ({
  performSearch: query => dispatch(performSearch(query))
});

export default connect(undefined, mapDispatchToProps)(SearchBar);
