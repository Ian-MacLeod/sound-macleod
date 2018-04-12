import React from "react";

class CreatePlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createPlaylist({
        title: this.state.title,
        trackIds: [this.props.trackId]
      })
      .then(this.props.closeModal);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Playlist Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <input type="submit" value="Create playlist" />
      </form>
    );
  }
}

export default CreatePlaylistForm;
