import { connect } from "react-redux";

import { signUp } from "../../actions/session_actions";
import UserFormModal from "./user_form_modal";

const mapStateToProps = state => ({
  formType: "Sign Up",
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFormModal);