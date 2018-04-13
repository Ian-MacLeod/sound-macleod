import React from "react";

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(Object.assign({}, this.state))
      .then(
        () => this.props.closeModal(),
        () => this.setState({ password: "" })
      );
  }

  render() {
    let switchModal;
    if (this.props.formType === "Sign In") {
      switchModal = (
        <p>
          New to SoundMacLeod?{" "}
          <a onClick={this.props.switchModal} href="#">
            Sign Up
          </a>
        </p>
      );
    } else {
      switchModal = (
        <p>
          Already a member?{" "}
          <a onClick={this.props.switchModal} href="#">
            Sign In
          </a>
        </p>
      );
    }
    return (
      <div className="session-form">
        <h2>{this.props.formType}</h2>
        <a className="close" onClick={this.props.closeModal}>
          &times;
        </a>
        {this.props.errors.length > 0 ? (
          <div className="errors">
            <ul>
              {this.props.errors.map(error => <li key={error}>{error}</li>)}
            </ul>
          </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput("username")}
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
          />
          <input
            onChange={this.handleInput("password")}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
          <input type="submit" value={this.props.formType} />
        </form>
        {switchModal}
        <p>
          Just want to try it out?{" "}
          <a onClick={this.props.signInDemoUser} href="#">
            Demo account
          </a>
        </p>
      </div>
    );
  }
}

export default SignInModal;
