import { connect } from "react-redux";

import { signIn } from "../../actions/session_actions";
import UserFormModal from "./user_form_modal";

const mapStateToProps = state => ({
  formType: "Sign In",
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFormModal);
