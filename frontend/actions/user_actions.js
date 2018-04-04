import * as UserAPIUtils from "../utils/user_api_utils";

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
