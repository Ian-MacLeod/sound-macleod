import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const defaultState = {
  tracks: {},
  users: {},
  playlists: {}
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.payload.results;
    default:
      return state;
  }
};

export default searchReducer;
