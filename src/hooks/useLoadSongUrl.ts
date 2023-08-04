// import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/src/types";

const useLoadSongUrl = (song: Song) => {
  // const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  }

  // const { data: songData } = supabaseClient
  // .storage
  // .from('songs')
  // .getPublicUrl(song.song_path);

  return "/song.mp3"
};

export default useLoadSongUrl;
