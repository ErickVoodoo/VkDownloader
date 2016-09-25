import { AUDIO_PLAY, AUDIO_PAUSE, AUDIO_NEXT, AUDIO_PREV, AUDIO_VOLUME } from '../actions/audio';

const PLAY = 'play';
const PAUSE = 'pause';

const initialState = {
  status: PAUSE,
  volume: 0.8,
  list: null,
  index: 0,
};

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_PLAY:
      return {
        ...state,
        status: PLAY,
        list: action.list,
        index: action.index,
      };

    case AUDIO_PAUSE:
      return {
        ...state,
        status: PAUSE,
        audio: action.list,
        index: action.index,
      };

    case AUDIO_PREV: 
    case AUDIO_NEXT:
      return {
        ...state,
        index: action.index,
      };

    case AUDIO_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };

    default:
      return state;
  }
}
