import Header from "@/components/Header";

import SearchContent from "./AlbumContent";
import { Song } from "@/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "@/utils/helpers";
import { ALBUM_ENDPOINT } from "@/utils/constants";

const AlbumPage = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const [songs, setSongs] = useState<Song[]>([]);

  async function fetchAlbumById(id: string | undefined) {
    try {
      if (id) {
        const response = await getData(`${ALBUM_ENDPOINT}/${id}`);
        const songs = response.songs;
        return songs;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  console.log(songs);

  useEffect(() => {
    fetchAlbumById(id).then((data) => setSongs(data));
  }, [id]);

  return (
    <>
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Album</h1>
        </div>
      </Header>
      <SearchContent songs={songs} />
    </>
  );
};

export default AlbumPage;
