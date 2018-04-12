import React from "react";

import AddToPlaylistIndex from "./add_to_playlist_index_container";
import CreatePlaylistForm from "./create_playlist_form_container";

class AddToPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "add" };
  }

  componentWillMount() {
    this.props.fetchPlaylists();
  }

  selectTab(tab) {
    return () => this.setState({ tab });
  }

  render() {
    return (
      <div className="add-to-playlist">
        <header>
          <h2>
            <span
              className={"option " + (this.state.tab === "add" ? "active" : "")}
              onClick={this.selectTab("add")}
            >
              Add to Playlist
            </span>
          </h2>
          <h2>
            <span
              className={
                "option " + (this.state.tab === "create" ? "active" : "")
              }
              onClick={this.selectTab("create")}
            >
              Create a Playlist
            </span>
          </h2>
        </header>
        {this.state.tab === "add" ? (
          <AddToPlaylistIndex trackId={this.props.trackId} />
        ) : (
          <CreatePlaylistForm trackId={this.props.trackId} />
        )}
      </div>
    );
  }
}

export default AddToPlaylistForm;
