import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';
import waveSvg from 'assets/image/wave.svg';
import playSvg from 'assets/image/play.svg';
import pauseSvg from 'assets/image/pause.svg';

import { convertToTime } from 'utils/helpers';
import { Time, CheckedIcon } from 'components';

const MessageAudio = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef(null);

  const togglePlay = () => {
    audioElem.current.volume = '0.1';
    if (isPlaying) {
      audioElem.current.pause();
    } else {
      audioElem.current.play();
    }
  };

  const timeUpdateHandler = () => {
    const duration = (audioElem && audioElem.current.duration) || 0;
    setCurrentTime(audioElem.current.currentTime);
    setProgress(Math.ceil((currentTime / duration) * 100 + duration * 0.5));
  };

  return (
    <div className="message__audio">
      <audio
        ref={audioElem}
        src={audioSrc}
        preload="auto"
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        }}
        onPlaying={() => setIsPlaying(true)}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
      <div
        className="message__audio-overlay"
        style={{ width: progress + '%' }}
      ></div>
      <div className="message__audio-content">
        <button className="message__audio-button" onClick={togglePlay}>
          {isPlaying ? (
            <img
              src={pauseSvg}
              alt="pause"
              className="message__audio-button-icon"
            />
          ) : (
            <img
              src={playSvg}
              alt="play"
              className="message__audio-button-icon"
            />
          )}
        </button>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="wave" />
        </div>
        <time className="message__audio-duration">
          {convertToTime(currentTime)}
        </time>
      </div>
    </div>
  );
};

const Message = ({
  text,
  avatar,
  date,
  user,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio,
}) => {
  return (
    <div
      className={classNames('message', {
        'message--is-me': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message--audio': audio,
      })}
    >
      <div className="message__content">
        <CheckedIcon isMe={isMe} isReaded={isReaded} />

        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullName}`} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <p className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              )}
              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, i) => (
                <div className="message__attachments-item" key={i}>
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          {date && (
            <time className="message__date">
              <Time date={date} />
            </time>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
