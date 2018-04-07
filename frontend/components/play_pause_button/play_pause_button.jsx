import React from "react";

class PlayPauseButton extends React.Component {
  handleClick(e) {
    e.stopPropagation();
    this.props.playPausePlayer();
  }

  render() {
    return (
      <div
        onClick={this.handleClick.bind(this)}
        className={"play-pause-button " + this.props.type}
      />
    );
  }
}

export default PlayPauseButton;
