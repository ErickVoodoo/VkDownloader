import { AUDIO_PLAY, AUDIO_PAUSE, AUDIO_NEXT, AUDIO_PREV, AUDIO_VOLUME } from '../actions/audio';

const audio = new Audio();

export default function audioMiddleware() {
  return ({ getState }) => next => action => {
    switch (action.type) {
      case AUDIO_PLAY: {
        if (audio.src !== action.list[action.index].url) {
          audio.src = action.list[action.index].url;
        }
        audio.play();
        next(action);
        break;
      }

      case AUDIO_PAUSE: {
        audio.pause();
        next(action);
        break;
      }

      case AUDIO_NEXT: {
        const { audioReducer: { list, index }} = getState();
        const nextIndex = index + 1 >= list.length ? 0 : index + 1;
        audio.src = list[nextIndex].url;
        audio.play();
        action.index = nextIndex;
        next(action);
        break;
      }

      case AUDIO_PREV: {
        const { audioReducer: { list, index }} = getState();
        const prevIndex = index - 1 < 0 ? list.length - 1: index - 1;
        audio.src = list[prevIndex].url;
        audio.play();
        action.index = prevIndex;
        next(action);
        break;
      }

      case AUDIO_VOLUME: {
        audio.volume = action.volume;
        next(action);
        break;
      }

      default:
        next(action);
    }
  };
}
