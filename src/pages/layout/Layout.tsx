import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import MusicPlayer from "@/components/MusicPlayer";

import { Outlet } from "react-router-dom";
import { Album, Artist, Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { song1, song2 } from "@/utils/mockData";
import { API_URL, getData } from "@/utils/helpers";

export interface GlobalData {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
}

export default function Layout() {
  // const products = await getActiveProductsWithPrices();
  const player = usePlayer();
  const userSongs: Song[] = [song1, song2]; //playlist placeholder
  const [globalData, setGlobalData] = useState<GlobalData>({songs:[], albums:[], artists:[]})

  async function getHomeData() {
    const getSongsPromise : Promise<Song[]> = getData(`${API_URL}songs/query`)
    const getAlbumsPromise : Promise<Album[]> = getData(`${API_URL}albums/query`)
    const getArtistsPromise : Promise<Artist[]> = getData(`${API_URL}artists/query`)
    // const getPlaylistPromise : Promise<Song[]> = getData(`${API_URL}playlists/query`)

    const responses =  await Promise.allSettled([getSongsPromise, getAlbumsPromise, getArtistsPromise])
    const [songs, albums, artists] =  responses.map(result => {
      if (result.status !== "fulfilled") {
        return []
      } else {
        return(result as PromiseFulfilledResult<any>).value
      }
    });

    return {
      songs, albums, artists
    }
  }

     
  useEffect(() => {
    getHomeData().then(data => setGlobalData({
      songs: data.songs,
      albums: data.albums,
      artists: data.artists
    }))
  },[])
  return (
    <>
      {/* <ModalProvider products={products} /> */}
      <Sidebar songs={userSongs}>
        <Outlet context={globalData}></Outlet>
      </Sidebar>
      {player.isActive && <MusicPlayer />}
    </>
  );
}
