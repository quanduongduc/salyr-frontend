import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";

import { Song } from "@/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "@/utils/helpers";
import { PLAYLIST_ENDPOINT } from "@/utils/constants";
import PlaylistContent from "./PlaylistContent";

const PlaylistPage = () => {
  const { id } = useParams<{
    id: string;
  }>()

  const [songs, setSongs] = useState<Song[]>([])

  async function fetchAlbumById(id: string | undefined) {
    try {
      if(id) {
        const response = await getData(`${PLAYLIST_ENDPOINT}/${id}`)
        const songs = response.songs
        return songs
      }
      else {
        return []
      }
    } catch (error) {
      console.log(error)
      return []
    }
  }
  console.log(songs)

  useEffect(() => {
    fetchAlbumById(id).then((data) => setSongs(data))
  }, [id])
  
  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div>
          <p className="text-white text-sm">Personal PlayList</p>
          </div>
          <h1 className="text-white text-3xl font-semibold">PlayList</h1>
          <SearchInput />
        </div>
      </Header>
      <PlaylistContent songs={songs} />
    </div>
  );
};

export default PlaylistPage;
