export const RECEIVE_SESSION_FORM_ERRORS = "RECEIVE_SESSION_FORM_ERRORS";
export const RECEIVE_TRACK_FORM_ERRORS = "RECEIVE_TRACK_FORM_ERRORS";
export const RECEIVE_COMMENT_FORM_ERRORS = "RECEIVE_COMMENT_FORM_ERRORS";
export const CLEAR_COMMENT_FORM_ERRORS = "CLEAR_COMMENT_FORM_ERRORS";

export const receiveSessionFormErrors = errors => ({
  type: RECEIVE_SESSION_FORM_ERRORS,
  errors
});

export const receiveTrackFormErrors = errors => ({
  type: RECEIVE_TRACK_FORM_ERRORS,
  errors
});

export const receiveCommentFormErrors = errors => ({
  type: RECEIVE_COMMENT_FORM_ERRORS,
  errors
});

export const clearComentFormErrors = errors => ({
  type: CLEAR_COMMENT_FORM_ERRORS,
  errors
});
