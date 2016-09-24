export const AUDIO_PLAY = 'AUDIO_PLAY';
export const AUDIO_PAUSE = 'AUDIO_PAUSE';

export const playAudio = ({ list, index }) => ({
  type: AUDIO_PLAY,
  list,
  index,
});

export const pauseAudio = ({ list, index }) => ({
  type: AUDIO_PAUSE,
  list,
  index,
});
