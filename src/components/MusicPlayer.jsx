import "./MusicPlayer.css";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import song from "../assets/music/Mourn.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setCurrentTime(progressBar.current.value);
  };

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioPlayer} src={song}></audio>
      <div className="song-name">
        <h3>Song Name</h3>
      </div>
      <div className="audio-progress-bar">
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
          className="progress-bar"
        />
      </div>
      <div className="audio-controls">
        <small className="audio-time-before-after">
          {calculateTime(currentTime)} /{" "}
          {duration && !isNaN(duration) && calculateTime(duration)}
        </small>

        <button className="audio-button prev-song">
          <MdSkipPrevious />
        </button>
        <button
          onClick={togglePlayPause}
          className="audio-button toggle-play-pause"
        >
          {isPlaying ? <MdPause /> : <MdPlayArrow />}
        </button>
        <button className="audio-button next-song">
          <MdSkipNext />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
