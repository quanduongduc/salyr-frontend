import { create } from "zustand";
import { Song } from "@/types";

interface PlayerState {
  queues: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
  shuffle: boolean;
}

function handleNextSongIndex(
  prevState: PlayerStore
): PlayerStore | Partial<PlayerStore> {
  const { shuffle, currentIndex, queues } = prevState;
  let newIndex = (currentIndex + 1) % queues.length;
  if (shuffle) {
    newIndex = Math.random() * queues.length;
  }

  const newActiveSong = prevState.queues[newIndex];
  return {
    currentIndex: newIndex,
    activeSong: newActiveSong,
  };
}

function handlePrevSongIndex(
  prevState: PlayerStore
): PlayerStore | Partial<PlayerStore> {
  const { currentIndex, shuffle, queues } = prevState;
  let newIndex;
  if (currentIndex === 0) {
    newIndex = queues.length - 1;
  } else if (shuffle) {
    newIndex = Math.floor(Math.random() * queues.length);
  } else {
    newIndex = currentIndex - 1;
  }
  const newActiveSong = prevState.queues[newIndex];
  return {
    currentIndex: newIndex,
    activeSong: newActiveSong,
  };
}

const initialState = {
  queues: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  shuffle: false,
  activeSong: {
    id: 123,
    title: "Hello",
    url: "./song.mp3",
    theme_url: "./images/liked.png",
    release_date: new Date(),
    genre: "Pop",
    duration: 222,
  },
};

interface PlayerStore extends PlayerState {
  setPlayingState: (state: boolean) => void;
  nextSongIndex: () => void;
  prevSongIndex: () => void;
  setQueues: (songs: Song[]) => void;
  setActiveSong: (song: Song) => void;
  active: () => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ...initialState,
  setPlayingState: (playing_state: boolean) =>
    set({ isPlaying: playing_state }),
  nextSongIndex: () => {
    set((prevState: PlayerStore) => handleNextSongIndex(prevState));
  },
  prevSongIndex: () => {
    set((prevState: PlayerStore) => handlePrevSongIndex(prevState));
  },
  setQueues: (songs: Song[]) => {
    set({ queues: songs });
  },
  setActiveSong: (song: Song) => {
    set({ activeSong: song });
  },
  active: () => {
    set({ isActive: true });
  },
  reset: () => {
    set(initialState);
  },
}));

export default usePlayer;
