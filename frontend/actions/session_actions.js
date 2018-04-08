import * as SessionAPIUtil from "../utils/session_api_utils";
import { receiveSessionFormErrors } from "./error_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const signIn = user => dispatch =>
  SessionAPIUtil.signIn(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveSessionFormErrors(error.responseJSON))
  );

export const signOut = () => dispatch =>
  SessionAPIUtil.signOut().then(
    () => dispatch(receiveCurrentUser(null)),
    error => console.log(error)
  );

export const signUp = user => dispatch =>
  SessionAPIUtil.signUp(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveSessionFormErrors(error.responseJSON))
  );

const demoUser = { username: "demo_user", password: "password" };

export const signInDemoUser = () => signIn(demoUser);
