import React from "react";
import { arrayMove } from "react-sortable-hoc";

import TrackList from "./track_list";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.onSortEnd = this.onSortEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      trackIds: arrayMove(this.state.trackIds, oldIndex, newIndex)
    });
  }

  removeTrack(idx) {
    return () => {
      this.setState({
        trackIds: this.state.trackIds
          .slice(0, idx)
          .concat(this.state.trackIds.slice(idx + 1))
      });
    };
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePlaylist(this.state).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className="playlist-form">
        <h2>Edit Playlist</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="playlist-title-input">Title</label>
          <input
            onChange={this.handleInput("title")}
            type="text"
            id="playlist-title-input"
            value={this.state.title}
          />
          <label>Tracks</label>
          <TrackList
            distance={2}
            trackIds={this.state.trackIds}
            onSortEnd={this.onSortEnd}
            removeTrack={this.removeTrack}
          />
          <div className="buttons">
            <input type="submit" value="Save changes" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
