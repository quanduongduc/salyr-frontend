import Header from "@/components/Header";

import SearchContent from "./AlbumContent";
import { Song } from "@/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL, getData } from "@/utils/helpers";


const AlbumPage = () => {
  const { id } = useParams<{
    id: string;
  }>()

  const [songs, setSongs] = useState<Song[]>([])

  async function fetchAlbumById(id: string | undefined) {
    try {
      if(id) {
        const response = await getData(`${API_URL}albums/${id}`)
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
          <h1 className="text-white text-3xl font-semibold">Album</h1>
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default AlbumPage;
