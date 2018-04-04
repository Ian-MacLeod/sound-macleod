import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { signOut } from "../../actions/session_actions";
import LoggedInHeader from "./logged_in_header";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)
);
