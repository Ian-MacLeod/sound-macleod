import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import ModalHolder from "./modal_holder";

const mapStateToProps = ({ ui: { modal } }) => modal;

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalHolder);
