import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Seekbar from "./Seekbar";
import Player from "./Player";
import VolumeBar from "./VolumeBar";
import usePlayer from "@/hooks/usePlayer";
import SongInfo from "./SongInfo";

const MusicPlayer: React.FC = () => {
  const player = usePlayer();
  const { queues: currentSongs, isPlaying, activeSong } = player;

  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);

  useEffect(() => {
    if (currentSongs.length) {
      player.setPlayingState(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player.currentIndex]);

  const handlePlayPause = () => {
    player.setPlayingState(!isPlaying);
  };

  const handleNextSong = () => {
    player.nextSongIndex();
  };

  const handlePrevSong = () => {
    player.prevSongIndex();
  };

  return (
    <div className="fixed bottom-0 left-0 sm:px-12 px-8 py-4 w-full flex items-center justify-between overflow-y-auto bg-black animate-fade-up">
      <SongInfo song={activeSong} />
      <div className="flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min={0}
          max={duration}
          onInput={(event) => setSeekTime(+event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(
            event: React.SyntheticEvent<HTMLAudioElement, Event>
          ) => {
            const audioElement = event.target as HTMLAudioElement;
            setAppTime(audioElement.currentTime);
          }}
          onLoadedData={(
            event: React.SyntheticEvent<HTMLAudioElement, Event>
          ) => {
            const audioElement = event.target as HTMLAudioElement;
            setDuration(audioElement.duration);
          }}
        />
      </div>
      <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={(event) => setVolume(+event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
