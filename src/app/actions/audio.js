export const AUDIO_PLAY = 'AUDIO_PLAY';
export const AUDIO_PAUSE = 'AUDIO_PAUSE';
export const AUDIO_NEXT = 'AUDIO_NEXT';
export const AUDIO_PREV = 'AUDIO_PREV';
export const AUDIO_VOLUME = 'AUDIO_VOLUME';

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

export const nextAudio = () => ({
  type: AUDIO_NEXT,
});

export const prevAudio = () => ({
  type: AUDIO_PREV,
});

export const volumeAudio = ({ volume }) => ({
  type: AUDIO_VOLUME,
  volume,
});
