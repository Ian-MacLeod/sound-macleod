import React from "react";
import { Redirect } from "react-router-dom";

import ImageDefault from "../image_default";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.blankState();
    this.clearForm = this.clearForm.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  blankState() {
    return {
      title: "",
      imageFile: null,
      imageUrl: null,
      dataFile: null,
      dataUrl: null,
      redirect: false,
      hasFileStart: false
    };
  }

  clearForm(e) {
    e.preventDefault();
    this.setState(this.blankState);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.dataFile) {
      this.props.displayErrors(["Track file can't be blank"]);
      return;
    }

    this.setState({ disabled: true });
    setTimeout(() => {
      this.props.action(this.state).then(
        action => {
          this.setState({ disabled: false });
          this.setState({ redirect: action.payload.track.id });
        },
        () => this.setState({ disabled: false })
      );
    }, 5000);
  }

  handleFileChange(key) {
    return e => {
      this.setState({ hasFileStart: true });
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
      <div className={"track-form " + (this.state.hasFileStart && "has-file")}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset disabled={this.state.disabled}>
            <div className="upload-box">
              <h1>Upload to SoundMacLeod</h1>
              <label className="upload-button" htmlFor="data">
                Choose a file to upload
              </label>
              <input
                className="file-input"
                type="file"
                name="data"
                id="data"
                onChange={this.handleFileChange("data")}
              />
            </div>
            <div className="remaining-form">
              <ul className="errors">
                {this.props.errors.map(error => <li key={error}>{error}</li>)}
              </ul>
              {this.state.disabled && (
                <div className="loading">
                  <div className="spinner">
                    <div className="rect1" />
                    <div className="rect2" />
                    <div className="rect3" />
                    <div className="rect4" />
                    <div className="rect5" />
                  </div>
                </div>
              )}
              <div className="preview">
                <ImageDefault src={this.state.imageUrl} />
                <div className="image-upload-area">
                  <div className="instructions">Update Image</div>
                  <label htmlFor="image" />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={this.handleFileChange("image")}
                  />
                </div>
              </div>
              <div className="fields">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInput("title")}
                />
                <div className="buttons">
                  <button onClick={this.clearForm}>Cancel</button>
                  <input type="submit" value="Create track" />
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default TrackForm;
