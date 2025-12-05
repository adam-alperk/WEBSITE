import React, { useState, useRef, ChangeEvent } from "react";
import ReactPlayer from "react-player";
import "./AudioPlayer.css";

// Define a type for the props
interface AudioPlayerProps {
  mname: string;
  url: string;
  cover: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ mname, url, cover }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    if (playerRef.current) {
      playerRef.current.seekTo(newPlayed);
    }
  };

  const handleProgress = (state: { playedSeconds: number }) => {
    setPlayed(state.playedSeconds);
  };

  const formatDuration = (seconds: number): string => {
    const pad = (num: number) => (num < 10 ? "0" + num : num.toString());
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
