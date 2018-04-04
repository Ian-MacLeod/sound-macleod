import { connect } from "react-redux";

import { signUp } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import UserFormModal from "./user_form_modal";
import SignInModalContainer from "./sign_in_modal_container";

const mapStateToProps = state => ({
  formType: "Sign Up",
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signUp(user)),
  switchModal: () => dispatch(openModal(SignInModalContainer))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFormModal);
