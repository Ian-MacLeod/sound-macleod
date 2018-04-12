import React from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

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

  render() {
    return (
      <div>
        <h2>Edit Playlist</h2>
        <TrackList trackIds={this.state.trackIds} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default PlaylistForm;
