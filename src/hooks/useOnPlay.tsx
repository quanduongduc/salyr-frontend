import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import axios from "axios";
import { USER_ENDPOINT } from "@/utils/constants";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (song: Song) => {
    if (!user) {
      return authModal.onOpen();
    }

    // if (!subscription) {
    //   return subscribeModal.onOpen();
    // }
    axios.put(`${USER_ENDPOINT}/lastplay/${song.id}`).then(() => {
      player.active();
      player.setPlayingState(true);
      player.setActiveSong(song);
      player.setQueues(songs);
    });
  };

  return onPlay;
};

export default useOnPlay;
