import React, { PropTypes } from 'react';
import AvPlayArrow from 'material-ui/svg-icons/Av/play-arrow';
import AvPause from 'material-ui/svg-icons/Av/pause';
import AvSkipNext from 'material-ui/svg-icons/Av/skip-next';
import AvSkipPrevious from 'material-ui/svg-icons/Av/skip-previous';
import { Slider } from 'material-ui';
import { FlatButton } from '../../components/forms';
import style from './styles.scss';
import { Main } from '../../constants';

class Footer extends React.Component {
  onPausePlay = () => {
    if (this.props.audioReducer.status === 'pause') {
      this.props.playAudio({ list: this.props.audioReducer.list, index: this.props.audioReducer.index });
    } else {
      this.props.pauseAudio({ list: this.props.audioReducer.list, index: this.props.audioReducer.index });
    }
  };

  onChangeVolume = (e, volume) => {
    this.props.volumeAudio({ volume: (100 - volume) / 100 });
  };

  render() {
    return (
      <div
        style={{
          background: Main.COLOR.PRIMARY,
        }}
        className={style.footer}
      >
        { this.props.audioReducer.list && !!this.props.audioReducer.list.length && <div
          className={style.panel}
        >
          <span
            style={{
              width: '33.3%',
              textAlign: 'center',
              fontSize: 18,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {`${this.props.audioReducer.list[this.props.audioReducer.index].artist}
              - ${this.props.audioReducer.list[this.props.audioReducer.index].title}`
            }
          </span>
          <div
            style={{
              width: '33.3%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FlatButton onClick={this.props.prevAudio}>
              <AvSkipPrevious color="#fff" />
            </FlatButton>
            <FlatButton onClick={this.onPausePlay}>
              {this.props.audioReducer.status !== 'pause' ? <AvPause color="#fff" /> : <AvPlayArrow color="#fff" />}
            </FlatButton>
            <FlatButton onClick={this.props.nextAudio}>
              <AvSkipNext color="#fff" />
            </FlatButton>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Slider
                className={style.volume}
                min={0}
                max={100}
                step={1}
                defaultValue={80}
                value={this.props.audioReducer.volume}
                onChange={this.onChangeVolume}
                axis="y-reverse"
                style={{
                  height: '50px',
                  margin: 0,
                }}
              />
              <span>{(this.props.audioReducer.volume * 100).toFixed()}</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '33.3%',
            }}
          >
            <Slider
              min={0}
              max={this.props.audioReducer.list[this.props.audioReducer.index].duration}
              step={1}
              style={{
                height: '50px',
                color: '#fff',
                margin: 0,
              }}
            />
          </div>
        </div>}
      </div>
    );
  }
}


Footer.propTypes = {
  audioReducer: PropTypes.object,
  playAudio: PropTypes.func,
  pauseAudio: PropTypes.func,
  nextAudio: PropTypes.func,
  prevAudio: PropTypes.func,
  volumeAudio: PropTypes.func,
};

export default Footer;
