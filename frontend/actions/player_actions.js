export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const PLAY_PAUSE_PLAYER = "PLAY_PAUSE_PLAYER";
export const PLAYER_SEEK = "PLAYER_SEEK";
export const WAVE_FORM_SEEK = "WAVE_FORM_SEEK";

export const pausePlayer = () => ({
  type: PAUSE_PLAYER
});

export const playPausePlayer = trackId => ({
  type: PLAY_PAUSE_PLAYER,
  trackId
});

export const playerSeek = progress => ({
  type: PLAYER_SEEK,
  progress
});

export const waveFormSeek = progress => ({
  type: WAVE_FORM_SEEK,
  progress
});
