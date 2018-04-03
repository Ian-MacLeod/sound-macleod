import { connect } from "react-redux";

import { signIn } from "../../actions/session_actions";
import SignInModal from "./sign_in_modal";

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signIn(user))
});

export default connect(null, mapDispatchToProps)(SignInModal);
