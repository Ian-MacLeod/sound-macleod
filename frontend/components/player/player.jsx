import React from "react";

import ReactPlayer from "react-player";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      seeking: false
    };

    this.setVolume = this.setVolume.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.ref = this.ref.bind(this);
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }
  toggleMuted() {
    this.setState({ muted: !this.state.muted });
  }
  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }
  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }
  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }
  onProgress(state) {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }
  onEnded() {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  }
  onDuration(duration) {
    console.log("onDuration", duration);
    this.setState({ duration });
  }
  ref(player) {
    this.player = player;
  }

  render() {
    console.log(this.props);
    const { played, volume, muted, loaded } = this.state;
    return (
      <div class="player">
        <div onClick={this.props.startPlayer}>Play</div>
        <div onClick={this.props.pausePlayer}>Pause</div>
        <ReactPlayer
          ref={this.ref}
          url={this.props.trackUrl}
          playing={this.props.playing}
          width="0"
          height="0"
          volume={volume}
          muted={muted}
          onEnded={this.onEnded}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <h1>Hello</h1>
        <div class="progress-wrap">
          <div class="progress-bar" style={{ width: `${played * 100}%` }}>
            <div class="thumb" />
          </div>
          <input
            class="progress"
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={this.setVolume}
        />
        <input
          id="muted"
          type="checkbox"
          checked={muted}
          onChange={this.toggleMuted}
        />
        <progress max={1} value={played} />
        <progress max={1} value={loaded} />
      </div>
    );
  }
}

export default Player;
