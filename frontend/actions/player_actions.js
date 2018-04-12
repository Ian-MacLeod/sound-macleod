export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const PLAY_PAUSE_PLAYER = "PLAY_PAUSE_PLAYER";
export const PLAYER_SEEK = "PLAYER_SEEK";
export const WAVE_FORM_SEEK = "WAVE_FORM_SEEK";
export const SET_PLAYER_REF = "SET_PLAYER_REF";
export const ADD_TO_NEXT_UP = "ADD_TO_NEXT_UP";
export const REMOVE_FROM_NEXT_UP = "REMOVE_FROM_NEXT_UP";
export const TRACK_END = "TRACK_END";
export const NEW_NEXT_UP = "NEW_NEXT_UP";
export const CLEAR_NEXT_UP = "CLEAR_NEXT_UP";

export const pausePlayer = () => ({
  type: PAUSE_PLAYER
});

export const playPausePlayer = (trackId, progress, playlistId) => ({
  type: PLAY_PAUSE_PLAYER,
  trackId,
  progress,
  playlistId: playlistId || null
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

export const removeFromNextUp = idx => ({
  type: REMOVE_FROM_NEXT_UP,
  idx
});

export const trackEnd = () => ({
  type: TRACK_END
});

export const newNextUp = trackIds => ({
  type: NEW_NEXT_UP,
  trackIds
});

export const clearNextUp = () => ({
  type: CLEAR_NEXT_UP
});
