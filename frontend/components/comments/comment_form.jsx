import React from "react";

import ImageDefault from "../image_default";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createComment({
        body: this.state.body,
        track_id: this.props.trackId
      })
      .then(this.setState({ body: "" }));
  }

  render() {
    return (
      <section className="comments-form">
        <ImageDefault src={this.props.currentUser.profilePic.url} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleInput}
          />
        </form>
      </section>
    );
  }
}

export default CommentForm;
