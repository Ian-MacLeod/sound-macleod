export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const PLAY_PAUSE_PLAYER = "PLAY_PAUSE_PLAYER";
export const PLAYER_SEEK = "PLAYER_SEEK";
export const WAVE_FORM_SEEK = "WAVE_FORM_SEEK";
export const SET_PLAYER_REF = "SET_PLAYER_REF";
export const ADD_TO_NEXT_UP = "ADD_TO_NEXT_UP";

export const pausePlayer = () => ({
  type: PAUSE_PLAYER
});

export const playPausePlayer = (trackId, progress) => ({
  type: PLAY_PAUSE_PLAYER,
  trackId,
  progress
});

export const playerSeek = progress => ({
  type: PLAYER_SEEK,
  progress
});

export const waveFormSeek = (progress, trackId) => ({
  type: WAVE_FORM_SEEK,
  progress,
  trackId
});

export const setPlayerRef = playerRef => ({
  type: SET_PLAYER_REF,
  playerRef
});

export const addToNextUp = trackIds => ({
  type: ADD_TO_NEXT_UP,
  trackIds
});
