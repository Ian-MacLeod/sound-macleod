import React from "react";
import WaveSurfer from "wavesurfer.js";

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastSeek: 0 };
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `.waveform-${this.props.track.id}`,
      waveColor: "#666",
      progressColor: "#f50",
      barWidth: 2,
      height: 60,
      normalize: true,
      responsive: true,
      cursorWidth: 0
    });
    this.wavesurfer.setMute(true);
    this.wavesurfer.load(this.props.track.data.url);
    let startAt;
    if (this.props.playerRef && this.props.playing) {
      startAt =
        this.props.playerRef.getCurrentTime() /
        this.props.playerRef.getDuration();
    } else {
      startAt = this.props.previousProgress || 0;
    }
    this.wavesurfer.on("ready", () => {
      this.wavesurfer.seekTo(startAt);
      this.forceUpdate();

      this.wavesurfer.on("seek", progress => {
        this.props.waveFormSeek(progress);
        if (!this.props.playing) {
          this.props.playPausePlayer(this.props.track.id);
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (!this.wavesurfer) return;
    if (this.props.playing !== this.wavesurfer.isPlaying()) {
      this.wavesurfer.playPause();
    }
    if (!this.props.playing) return;
    if (this.props.lastSeek !== prevProps.lastSeek) {
      this.wavesurfer.seekTo(this.props.lastSeek);
    }
  }

  componentWillUnmount() {
    this.wavesurfer.destroy();
  }

  render() {
    return <div className={`waveform waveform-${this.props.track.id}`} />;
  }
}

export default WaveForm;
