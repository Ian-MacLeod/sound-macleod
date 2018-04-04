import * as TrackAPIUtils from "../utils/track_api_utils";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
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
