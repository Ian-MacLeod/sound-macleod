import { connect } from "react-redux";

import { signIn } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import UserFormModal from "./user_form_modal";
import SignUpModalContainer from "./sign_up_modal_container";

const mapStateToProps = state => ({
  formType: "Sign In",
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signIn(user)),
  switchModal: () => dispatch(openModal(SignUpModalContainer))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFormModal);
