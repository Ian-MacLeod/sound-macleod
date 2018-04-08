import { connect } from "react-redux";

import { fetchUser, updateUser } from "../../actions/user_actions";
import UserProfile from "./user_profile";

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  let tracks = [];
  if (user && user.trackIds) {
    tracks = user.trackIds.map(id => state.entities.tracks[id]);
  }
  return {
    user,
    tracks,
    isOwnProfile:
      state.session.currentUser.id.toString() === ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.match.params.userId)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
