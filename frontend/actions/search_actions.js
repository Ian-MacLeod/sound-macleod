import * as searchAPIUtils from "../utils/search_api_utils";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = payload => ({
  type: RECEIVE_SEARCH_RESULTS,
  payload
});

export const performSearch = query => dispatch => (
  searchAPIUtils.performSearch(query).then(
    payload => dispatch(receiveSearchResults(payload))
  )
);