import { connect } from "react-redux";

import { signInDemoUser } from "../../actions/session_actions";
import Home from "./home";

const mapDispatchToProps = dispatch => ({
  signInDemoUser: () => dispatch(signInDemoUser())
});

export default connect(null, mapDispatchToProps)(Home);
