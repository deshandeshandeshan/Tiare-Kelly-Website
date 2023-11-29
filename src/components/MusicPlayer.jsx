import "./MusicPlayer.css";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import playlist from "../data/Playlist";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(playlist[0]);

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

  const prevSong = () => {
    {
      const index = playlist.findIndex((x) => x.title == currentSong.title);
      if (index == 0) {
        setCurrentSong(playlist[playlist.length - 1]);
      } else {
        setCurrentSong(playlist[index - 1]);
      }
      audioPlayer.current.currentTime = 0;
    }
  };

  const nextSong = () => {
    const index = playlist.findIndex((x) => x.title == currentSong.title);

    if (index == playlist.length - 1) {
      setCurrentSong(playlist[0]);
    } else {
      setCurrentSong(playlist[index + 1]);
    }
    audioPlayer.current.currentTime = 0;
  };

  console.log(duration);

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

    if (isNaN(duration)) {
      return "0:00";
    } else {
      return `${returnedMinutes} : ${returnedSeconds}`;
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioPlayer} autoPlay src={currentSong.url} />
      <div className="song-name">
        <h3>{currentSong.title}</h3>
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
          {calculateTime(currentTime)} /{calculateTime(duration)}
        </small>
        <div className="audio-control-buttons">
          <button className="audio-button prev-song" onClick={prevSong}>
            <MdSkipPrevious />
          </button>
          <button
            onClick={togglePlayPause}
            className="audio-button toggle-play-pause"
          >
            {isPlaying ? <MdPause /> : <MdPlayArrow />}
          </button>
          <button className="audio-button next-song" onClick={nextSong}>
            <MdSkipNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
