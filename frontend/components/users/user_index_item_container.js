import { connect } from "react-redux";

import UserIndexItem from "./user_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.id]
});

export default connect(mapStateToProps)(UserIndexItem);