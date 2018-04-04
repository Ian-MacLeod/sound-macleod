import React from "react";

class TrackIndex extends React.Component {
  componentWillMount() {
    this.props.fetchTracks();
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.tracks.map((track, idx) => (
            <TrackIndexItem key={track.id} track={track} idx={idx} />
          ))}
        </ol>
      </div>
    );
  }
}

export default TrackIndex;
