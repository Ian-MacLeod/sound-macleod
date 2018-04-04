import { connect } from "react-redux";

import { openModal } from "../../actions/modal_actions";
import SignInModalContainer from "../modal/sign_in_modal_container";
import SignUpModalContainer from "../modal/sign_up_modal_container";
import LoggedOutHeader from "./logged_out_header";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openSignInModal: () => dispatch(openModal(SignInModalContainer)),
  openSignUpModal: () => dispatch(openModal(SignUpModalContainer))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOutHeader);
