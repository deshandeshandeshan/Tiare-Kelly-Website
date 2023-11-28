import "./MusicPlayer.css";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";
import { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  console.log(isPlaying);

  return (
    <div>
      <audio src="../assets/music/Mourn.mp3"></audio>
      <button>
        <MdSkipPrevious />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <MdPause /> : <MdPlayArrow />}
      </button>
      <button>
        <MdSkipNext />
      </button>

      <div>0:00</div>
      <div>
        <input type="range" />
      </div>
      <div>3:00</div>
    </div>
  );
};

export default MusicPlayer;
