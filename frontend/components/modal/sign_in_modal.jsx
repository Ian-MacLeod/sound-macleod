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
      .then(() => this.props.closeModal());
  }

  render() {
    return (
      <div>
        <a onClick={this.props.closeModal} href="#">
          Close Modal
        </a>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={this.handleInput("username")}
              type="text"
              name="username"
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={this.handleInput("password")}
              type="password"
              name="password"
              value={this.state.password}
            />
          </div>
          <input type="submit" value="Sign In" />
        </form>
        {this.props.testProp}
      </div>
    );
  }
}

export default SignInModal;
