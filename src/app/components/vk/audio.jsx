import React, { Component, PropTypes } from 'react';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import _ from 'lodash';
import { FlatButton } from '../forms';
import style from './styles.scss';
import { getDuration } from '../../utils/math';

class Audio extends Component {
  static propTypes = {
    audioIndex: PropTypes.number.isRequired,
    audioList: PropTypes.object.isRequired,
    audioReducer: PropTypes.object.isRequired,
    playAudio: PropTypes.func.isRequired,
    pauseAudio: PropTypes.func.isRequired,
  };

  shouldComponentUpdate = (nextProps) =>
    !_.isEqual(nextProps.audioIndex, this.props.audioIndex) ||
    !_.isEqual(nextProps.audioList, this.props.audioList) ||
    !_.isEqual(nextProps.audioReducer, this.props.audioReducer);

  onClick = () => {
    if (!!this.props.audioReducer.list && (
      this.props.audioList[this.props.audioIndex].aid ===
      this.props.audioReducer.list[this.props.audioReducer.index].aid
      && this.props.audioReducer.status === 'play')) {
      this.props.pauseAudio({ list: this.props.audioList, index: this.props.audioIndex });
    } else {
      this.props.playAudio({ list: this.props.audioList, index: this.props.audioIndex });
    }
  };

  render() {
    return (
      <div
        className={style.audio}
      >
        <FlatButton
          style={{
            marginRight: '16px',
          }}
          onClick={this.onClick}
          disabled={!this.props.audioList[this.props.audioIndex].url}
        >
        { !!this.props.audioReducer.list &&
          (this.props.audioList[this.props.audioIndex].aid ===
            this.props.audioReducer.list[this.props.audioReducer.index].aid
            && this.props.audioReducer.status === 'play') ?
          <AvPause /> : <AvPlayArrow />
        }
        </FlatButton>
        <span
          style={{
            flex: '1 0 auto',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 0,
            opacity: !this.props.audioList[this.props.audioIndex].url ? 0.4 : 1,
            whiteSpace: 'nowrap',
            paddingRight: '8px',
            alignSelf: 'center',
          }}
        >
          {`${this.props.audioList[this.props.audioIndex].artist}
            - ${this.props.audioList[this.props.audioIndex].title}`
          }
        </span>
        <span
          style={{
            color: 'gray',
            fontSize: '10px',
            textAlign: 'right',
            alignSelf: 'center',
          }}
        >
          {getDuration(this.props.audioList[this.props.audioIndex].duration)}
        </span>
      </div>
    );
  }
}

export default Audio;
