import * as CommentAPIUtil from "../utils/comment_api_utils";
import { receiveCommentFormErrors } from "./error_actions";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = comment => dispatch =>
  CommentAPIUtil.createComment(comment).then(newComment =>
    dispatch(receiveComment(newComment), err =>
      dispatch(receiveCommentFormErrors(err.responseJSON))
    )
  );

export const deleteComment = id => dispatch =>
  CommentAPIUtil.deleteComment(id).then(newComment =>
    dispatch(removeComment(newComment), err =>
      dispatch(receiveCommentFormErrors(err.responseJSON))
    )
  );
