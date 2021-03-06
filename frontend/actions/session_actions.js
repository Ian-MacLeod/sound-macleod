import * as SessionAPIUtils from "../utils/session_api_utils";
import { receiveSessionFormErrors } from "./error_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logOut = () => ({
  type: LOG_OUT
});

export const signIn = user => dispatch =>
  SessionAPIUtils.signIn(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveSessionFormErrors(error.responseJSON))
  );

export const signOut = () => dispatch =>
  SessionAPIUtils.signOut().then(() => dispatch(logOut()));

export const signUp = user => dispatch =>
  SessionAPIUtils.signUp(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(receiveSessionFormErrors(error.responseJSON))
  );

const demoUser = { username: "demo_user", password: "password" };

export const signInDemoUser = () => signIn(demoUser);
