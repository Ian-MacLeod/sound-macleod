import { connect } from "react-redux";

import { signOut } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import SessionButtons from "./session_buttons";
import SignInModalContainer from "../modal/sign_in_modal_container";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  openModal: () =>
    dispatch(openModal(SignInModalContainer, { testProp: "test" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
