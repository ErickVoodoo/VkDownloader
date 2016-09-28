export const getDuration = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - (hours * 3600)) / 60);
  const seconds = duration - (hours * 3600) - (minutes * 60);
  return (hours ? `${hours}:` : '') +
    (hours || minutes ? `${(minutes.toString().length === 1 ? `0${minutes}` : minutes)}:` : '') +
    (seconds.toString().length === 1 ? `0${seconds}` : seconds);
};

export const def = () => 1;
