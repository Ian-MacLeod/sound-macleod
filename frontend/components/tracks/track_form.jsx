import React from "react";
import { Redirect } from "react-router-dom";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.blankState();
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  blankState() {
    return {
      title: "",
      imageFile: null,
      imageUrl: null,
      dataFile: null,
      dataUrl: null,
      redirect: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.dataFile) {
      this.props.displayErrors(["Track file can't be blank"]);
      return;
    }

    this.setState({ disabled: true });

    this.props.action(this.state).then(action => {
      this.setState({ disabled: false });
      this.setState({ redirect: action.payload.track.id });
    });
  }

  handleFileChange(key) {
    return e => {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          [`${key}File`]: file,
          [`${key}Url`]: fileReader.result
        });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/tracks/${this.state.redirect}`} />;
    }
    return (
      <div className="track-form">
        {this.state.disabled && <div className="loading" />}

        <ul className="errors">
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset disabled={this.state.disabled}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput("title")}
            />

            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              onChange={this.handleFileChange("image")}
            />

            <label htmlFor="data">Upload</label>
            <input
              type="file"
              name="data"
              onChange={this.handleFileChange("data")}
            />

            <input type="submit" value="Create track" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default TrackForm;
