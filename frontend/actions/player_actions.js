export const START_PLAYER = "START_PLAYER";
export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const PLAY_TRACK = "PLAY_TRACK";

export const playTrack = url => ({
  type: PLAY_TRACK,
  url
});

export const startPlayer = () => ({
  type: START_PLAYER
});

export const pausePlayer = () => ({
  type: PAUSE_PLAYER
});
