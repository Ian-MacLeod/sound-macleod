import React from "react";

import AddToPlaylistIndex from "./add_to_playlist_index_container";

class AddToPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, tab: "add" };
    this.selectTab.bind(this);
  }

  componentWillMount() {
    this.props
      .fetchPlaylists()
      .then(
        () => this.setState({ loading: false }),
        () => this.props.fetchPlaylists()
      );
  }

  selectTab(tab) {
    this.setState({ tab });
  }

  render() {
    if (this.state.loading) {
      return <div class="loading" />;
    }
    return (
      <div className="add-to-playlist">
        <header>
          <h2>
            <span
              class={"option " + (this.state.tab === "add" ? "active" : "")}
              onClick={this.selectTab("add")}
            >
              Add to a Playlist
            </span>
          </h2>
          <h2>
            <span
              class={"option " + (this.state.tab === "create" ? "active" : "")}
              onClick={this.selectTab("edit")}
            >
              Create a Playlist
            </span>
          </h2>
        </header>
        <AddToPlaylistIndex />
      </div>
    );
  }
}

export default AddToPlaylistForm;
