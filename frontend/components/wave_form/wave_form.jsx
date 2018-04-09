import React from "react";
import WaveSurfer from "wavesurfer.js";

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastSeek: 0 };
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

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `.waveform-${this.props.track.id}`,
      waveColor: "#666",
      progressColor: "#f50",
      barWidth: 2,
      height: 60,
      cursorWidth: 0
    });
    this.wavesurfer.setMute(true);
    this.wavesurfer.load(this.props.track.data.url);
    this.wavesurfer.on("seek", progress => this.props.waveFormSeek(progress));
  }

  componentWillUnMount() {
    this.wavesurfer.destroy();
  }

  render() {
    return <div className={`waveform waveform-${this.props.track.id}`} />;
  }
}

export default WaveForm;
