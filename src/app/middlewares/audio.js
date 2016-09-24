import { AUDIO_PLAY, AUDIO_PAUSE } from '../actions/audio';

const audio = new Audio();

export default function audioMiddleware() {
  return () => next => action => {
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

      default:
        next(action);
    }
  }
}
