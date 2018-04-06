import React from "react";

import ReactPlayer from "react-player";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div onClick={this.props.startPlayer}>Play</div>
        <div onClick={this.props.pausePlayer}>Pause</div>
        <ReactPlayer
          url={this.props.trackUrl}
          playing={this.props.playing}
          width="0"
          height="0"
        />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Player;
