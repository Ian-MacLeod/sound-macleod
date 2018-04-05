import React from "react";
import { Redirect } from "react-router-dom";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.blankState();
  }

  blankState() {
    return { title: "", dataFile: null, dataUrl: null, redirect: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.dataFile) {
      this.props.displayErrors(["Track file can't be blank"]);
      return;
    }

    this.props.action(this.state).then(action => {
      console.log(action);
      this.setState({ redirect: action.payload.track.id });
    });
  }

  handleFileChange(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ dataFile: file, dataUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/api/tracks/${this.state.redirect}`} />;
    }
    return (
      <div>
        <ul className="errors">
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput("title")}
          />
          <label htmlFor="data">Upload</label>
          <input
            type="file"
            name="data"
            onChange={this.handleFileChange.bind(this)}
          />
          <input type="submit" value="Create track" />
        </form>
      </div>
    );
  }
}

export default TrackForm;
