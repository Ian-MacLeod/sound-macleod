import * as CommentAPIUtil from "../utils/comment_api_utils";
import { receiveCommentFormErrors } from "./error_actions";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
});

export const createComment = comment => dispatch =>
  CommentAPIUtil.createComment(comment).then(newComment =>
    dispatch(receiveComment(newComment), err =>
      dispatch(receiveCommentFormErrors(err.responseJSON))
    )
  );
