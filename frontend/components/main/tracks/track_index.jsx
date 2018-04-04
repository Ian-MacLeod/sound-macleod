import React from "react";

import TrackIndexItemContainer from "./track_index_item_container";

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  render() {
    return (
      <div className="track-index">
        <ol className="tracks">
          <li className="title">
            <div className="left">
              <div className="number">#</div>
              <div className="info">Track</div>
            </div>
            <div className="length">Length</div>
          </li>
          {this.props.tracks.map((track, idx) => (
            <TrackIndexItemContainer
              key={track.id}
              track={track}
              idx={idx + 1}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default TrackIndex;
