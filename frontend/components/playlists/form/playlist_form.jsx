import React from "react";
import { arrayMove } from "react-sortable-hoc";

import TrackList from "./track_list";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      trackIds: arrayMove(this.state.trackIds, oldIndex, newIndex)
    });
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div class="playlist-form">
        <h2>Edit Playlist</h2>
        <a className="close" onClick={this.props.closeModal} href="#">
          &times;
        </a>
        <label htmlFor="playlist-title-input">Title</label>
        <input
          onChange={this.handleInput("title")}
          type="text"
          id="playlist-title-input"
          value={this.state.title}
        />
        <label>Tracks</label>
        <form>
          <TrackList
            distance={2}
            trackIds={this.state.trackIds}
            onSortEnd={this.onSortEnd}
          />
          <div class="buttons">
            <input type="submit" value="Save changes" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
