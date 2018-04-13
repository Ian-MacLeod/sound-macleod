import React from "react";

import TrackIndex from "../tracks/big/track_index";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {
    this.props.fetchTracks().then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div className="loading" />;
    }
    return (
      <div className="charts">
        <h1>Top Tracks</h1>
        <TrackIndex
          tracks={this.props.tracks
            .sort((x, y) => y.numLikes - x.numLikes)
            .slice(0, 6)}
        />
      </div>
    );
  }
}

export default Charts;
