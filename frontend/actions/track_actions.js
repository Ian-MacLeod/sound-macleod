import * as TrackAPIUtils from "../utils/track_api_utils";
import { receiveTrackFormErrors } from "./error_actions";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";

const receiveTrack = payload => ({
  type: RECEIVE_TRACK,
  payload
});

const receiveTracks = payload => ({
  type: RECEIVE_TRACKS,
  payload
});

const removeTrack = ({ track }) => ({
  type: REMOVE_TRACK,
  track
});

export const fetchTrack = id => dispatch =>
  TrackAPIUtils.fetchTrack(id).then(
    track => dispatch(receiveTrack(track)),
    error => console.log(error)
  );

export const fetchTracks = () => dispatch =>
  TrackAPIUtils.fetchTracks().then(
    tracks => dispatch(receiveTracks(tracks)),
    error => console.log(error)
  );

export const deleteTrack = id => dispatch =>
  TrackAPIUtils.deleteTrack(id).then(trackId =>
    dispatch(removeTrack(trackId), error => console.log(error))
  );

export const createTrack = track => dispatch =>
  TrackAPIUtils.createTrack(track).then(
    newTrack => dispatch(receiveTrack(newTrack)),
    error => dispatch(receiveTrackFormErrors(error.responseJSON))
  );
