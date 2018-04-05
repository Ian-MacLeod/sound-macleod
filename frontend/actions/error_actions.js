export const RECEIVE_SESSION_FORM_ERRORS = "RECEIVE_SESSION_FORM_ERRORS";
export const RECEIVE_TRACK_FORM_ERRORS = "RECEIVE_TRACK_FORM_ERRORS";

export const receiveSessionFormErrors = errors => ({
  type: RECEIVE_SESSION_FORM_ERRORS,
  errors
});

export const receiveTrackFormErrors = errors => ({
  type: RECEIVE_TRACK_FORM_ERRORS,
  errors
});
