import React, { useState, useRef } from 'react';

import waveSvg from 'assets/image/wave.svg';
import playSvg from 'assets/image/play.svg';
import pauseSvg from 'assets/image/pause.svg';

import { convertToTime } from 'utils/helpers';

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

export default MessageAudio;
