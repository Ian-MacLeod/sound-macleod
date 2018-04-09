import React from "react";

import ReactPlayer from "react-player";

import { formatDuration } from "../../utils/time_utils";
import PlayPauseButton from "../play_pause_button/play_pause_button_container";
import PlayerTrackDetails from "./player_track_details_container";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      seeking: false,
      startTime: null
    };

    this.rememberProgress = this.rememberProgress.bind(this);
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

  componentDidUpdate(prevProps) {
    if (!prevProps.track) return;
    if (this.props.track.id !== prevProps.track.id) {
      this.setState({ startTime: this.props.player.lastWaveFormSeek });
    } else if (
      this.props.player.lastWaveFormSeek !== prevProps.player.lastWaveFormSeek
    ) {
      this.player.seekTo(this.props.player.lastWaveFormSeek);
    }
  }

  rememberProgress() {
    if (this.state.startTime !== null) {
      const startTime = this.state.startTime;
      this.setState({ startTime: null });
      this.player.seekTo(startTime);
    }
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value), muted: false });
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
    const progress = parseFloat(e.target.value);
    this.player.seekTo(progress);
    this.props.playerSeek(progress);
  }
  onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }
  onEnded() {
    this.props.trackEnd();
  }
  onDuration(duration) {
    this.setState({ duration });
  }
  ref(player) {
    this.player = player;
    this.props.setPlayerRef(player);
  }

  render() {
    const { played, duration, volume, muted, loaded } = this.state;
    if (this.props.track === undefined) {
      return "";
    }
    return (
      <div>
        <div className="player-spacer" />
        <div className="player">
          <ReactPlayer
            ref={this.ref}
            url={this.props.track.data.url}
            playing={this.props.player.playing}
            width="0"
            height="0"
            volume={volume}
            muted={muted}
            onEnded={this.onEnded}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            progressInterval={50}
            onReady={this.rememberProgress}
            config={{ file: { forceAudio: true } }}
          />
          <div className="player-content content">
            <div className="play-controls">
              <PlayPauseButton trackId={this.props.player.trackId} />
            </div>
            <div className="progress-controls">
              <p className="played">{formatDuration(played * duration)}</p>
              <div className="progress-wrap">
                <div className="groove">
                  <div
                    className="fullness-bar"
                    style={{ width: `${played * 100}%` }}
                  >
                    <div className="thumb" />
                  </div>
                </div>
                <input
                  className="hidden-input"
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
              <p className="duration">{formatDuration(duration)}</p>
            </div>
            <div className="volume-controls">
              <div className="outer-wrap">
                <div
                  className={"volume-button " + (muted ? "muted" : "")}
                  onClick={this.toggleMuted}
                />
                <div className="volume-wrap">
                  <div className="volume-pad">
                    <div className="groove">
                      <div
                        className="fullness-bar"
                        style={{ width: `${muted ? 0 : volume * 100}%` }}
                      >
                        <div className="thumb" />
                      </div>
                    </div>
                    <input
                      className="hidden-input"
                      type="range"
                      min={0}
                      max={1}
                      step="any"
                      value={volume}
                      onChange={this.setVolume}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PlayerTrackDetails track={this.props.track} />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
