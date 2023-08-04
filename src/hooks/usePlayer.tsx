import { create } from "zustand";
import { Song } from "@/types";

interface PlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
  shuffle: boolean;
}

function handlerNextSongIndex(prevState: PlayerState): number {
  const { shuffle, currentIndex, currentSongs } = prevState;

  if (!shuffle) return (currentIndex + 1) % currentSongs.length;

  return Math.random() * currentSongs.length;
}

function handlerPrevSongIndex(prevState: PlayerState): number {
  const { currentIndex, shuffle, currentSongs } = prevState;
  let newIndex;
  if (currentIndex === 0) {
    newIndex = currentSongs.length - 1;
  } else if (shuffle) {
    newIndex = Math.floor(Math.random() * currentSongs.length);
  } else {
    newIndex = currentIndex - 1;
  }

  return newIndex;
}

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  shuffle: false,
  activeSong: {
    id: "123",
    user_id: "123",
    author: "Hello",
    title: "Hello",
    song_path: "./song.mp3",
    image_path: "./images/liked.png",
  },
};

interface PlayerStore extends PlayerState {
  setPlayingState: (state: boolean) => void;
  nextSongIndex: () => void;
  prevSongIndex: () => void;
  setCurrentSongs: (songs: Song[]) => void;
  setActiveSong: (song: Song) => void;
  active: () => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ...initialState,
  setPlayingState: (playing_state: boolean) =>
    set({ isPlaying: playing_state }),
  nextSongIndex: () => {
    set((prevState) => ({ currentIndex: handlerNextSongIndex(prevState) }));
  },
  prevSongIndex: () => {
    set((prevState) => ({ currentIndex: handlerPrevSongIndex(prevState) }));
  },
  setCurrentSongs: (songs: Song[]) => {
    set({ currentSongs: songs });
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
