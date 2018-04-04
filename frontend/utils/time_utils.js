const padNum = num => (num >= 10 ? num.toString() : `0${num}`);

export const formatDuration = duration => {
  const seconds = Math.floor(duration % 60);
  const minutes = Math.floor((duration / 60) % 60);
  const hours = Math.floor(duration / 3600);
  if (hours > 0) {
    return `${hours}:${padNum(minutes)}:${padNum(seconds)}`;
  } else {
    return `${minutes}:${padNum(seconds)}`;
  }
};
