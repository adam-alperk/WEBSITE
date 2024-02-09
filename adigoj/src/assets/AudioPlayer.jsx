import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./AudioPlayer.css"; // Make sure to create this CSS file for styles

const AudioPlayer = ({ mname, url, cover }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    setPlayed(state.playedSeconds);
  };

  const formatDuration = (seconds) => {
    const pad = (num) => (num < 10 ? "0" + num : num);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(secondsLeft)}`;
    } else {
      return `${pad(minutes)}:${pad(secondsLeft)}`;
    }
  };

  return (
    <div className="audio-player">
      <img src={cover} alt="Music cover" className="cover" />
      <div className="mname-div">
        <h3 className="music-name">{mname}</h3>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        onDuration={(duration) => setDuration(duration)}
        onProgress={handleProgress}
        width="100%"
        height="50px"
        config={{ file: { forceAudio: true } }}
      />
      <div className="controls">
        <button onClick={handlePlayPause} className="play-button">
          {playing ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min={0}
          max={duration}
          value={played}
          onChange={handleSeekChange}
          className="seek"
        />
        <div className="time">
          {formatDuration(played)} / {formatDuration(duration)}
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
