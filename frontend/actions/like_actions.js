import * as LikeAPIUtils from "../utils/like_api_utils";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = id => dispatch =>
  LikeAPIUtils.createLike(id).then(
    like => dispatch(receiveLike(like)),
    err => console.log(err)
  );

export const deleteLike = id => dispatch =>
  LikeAPIUtils.deleteLike(id).then(
    like => dispatch(removeLike(like)),
    err => console.log(err)
  );
