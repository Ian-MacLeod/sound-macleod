import * as UserAPIUtils from "../utils/user_api_utils";
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const fetchUser = id => dispatch =>
  UserAPIUtils.fetchUser(id).then(
    payload => dispatch(receiveUser(payload)),
    error => console.log(error)
  );

export const updateUser = user => dispatch =>
  UserAPIUtils.updateUser(user).then(
    payload => dispatch(receiveCurrentUser(payload)),
    error => console.log(error)
  );
