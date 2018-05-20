import React from "react";
import { NavLink } from "react-router-dom";

import TrackIndex from "../tracks/big/track_index_container";
import PlaylistIndex from "../playlists/playlist_index";
import UserIndex from "../users/user_index";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.performSearch(this.props.match.params.query);
  }

  render() {
    const { trackIds, playlistIds, userIds } = this.props;
    const { query, model } = this.props.match.params;

    let searchResults;

    switch (model) {
      case "playlists":
        searchResults = <PlaylistIndex playlistIds={playlistIds} />;
        break
      case "users":
        searchResults = <UserIndex userIds={userIds} />;
        break
      default:
        searchResults = <TrackIndex trackIds={trackIds} />;
    }

    return (
      <div className="search">
        <div className="ui">
          <header>
            <h2>Search Results for "{query}"</h2>
          </header>
          <ul className="links">
            <li>
              <NavLink to={`/search/tracks/${query}`}>Tracks</NavLink>
            </li>
            <li>
              <NavLink to={`/search/playlists/${query}`}>Playlists</NavLink>
            </li>
            <li>
              <NavLink to={`/search/users/${query}`}>Users</NavLink>
            </li>
          </ul>
        </div>
        <section className="results">
          {searchResults}
        </section>
      </div>
    );
  }
}

export default SearchIndex;
