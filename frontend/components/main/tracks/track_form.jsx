import React from "react";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.title} name="title" />
          <input type="submit" value="Create track" />
        </form>
      </div>
    );
  }
}

export default TrackForm;
