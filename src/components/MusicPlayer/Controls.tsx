import React, { ReactElement } from 'react';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

interface ControlsProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongs: any[]; // Replace 'any[]' with the actual type of your 'currentSongs' array
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}): ReactElement => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={repeat ? 'red' : 'white'}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs.length > 0 && (
      <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />
    )}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs.length > 0 && (
      <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? 'red' : 'white'}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;
