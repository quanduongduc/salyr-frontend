/* eslint-disable jsx-a11y/media-has-caption */
import { Song } from "@/types";
import React, { useRef, useEffect } from "react";

interface PlayerProps {
  activeSong: Song;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
  repeat: boolean;
}

const Player: React.FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}): JSX.Element => {
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        const playPromise = ref.current.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            // We can now safely pause video...
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
        }
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying, activeSong]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      src={activeSong.url}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
