import { AUDIO_PLAY, AUDIO_PAUSE } from '../actions/audio';

const PLAY = 'play';
const PAUSE = 'pause';

const initialState = {
  status: PAUSE,
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

    default:
      return state;
  }
}
