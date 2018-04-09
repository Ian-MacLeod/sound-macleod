import React from "react";

import TrackIndexItemContainer from "./track_index_item_container";

class TrackIndex extends React.Component {
  componentWillMount() {
    if (this.props.fetchTracks !== undefined) {
      this.props.fetchTracks();
    }
  }

  render() {
    return (
      <div className="track-index-detailed">
        <ol className="tracks">
          {this.props.tracks.map((track, idx) => (
            <TrackIndexItemContainer
              key={track.id}
              track={track}
              isOwnTrack={this.props.isOwnTrack}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default TrackIndex;
