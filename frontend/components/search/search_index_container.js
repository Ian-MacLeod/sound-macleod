import { connect } from "react-redux";

import { performSearch } from "../../actions/search_actions";
import SearchIndex from "./search_index";

const mapStateToProps = state => {
  const { trackIds, userIds, playlistIds } = state.ui.search;
  return {
    trackIds: trackIds || [],
    userIds: userIds || [],
    playlistIds: playlistIds || []
  }
};

const mapDispatchToProps = dispatch => ({
  performSearch: query => dispatch(performSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
