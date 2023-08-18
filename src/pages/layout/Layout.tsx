import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import MusicPlayer from "@/components/MusicPlayer";

import { Outlet } from "react-router-dom";
import { Album, Artist, Playlist, Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { getData } from "@/utils/helpers";
import {
  ALBUM_ENDPOINT,
  ARTIST_ENDPOINT,
  SONG_ENDPOINT,
  USER_ENDPOINT,
  PLAYLIST_ENDPOINT,
} from "@/utils/constants";

export interface GlobalData {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
  playlists: Playlist[];
  liked_songs: Song[];
}

export default function Layout() {
  // const products = await getActiveProductsWithPrices();
  const player = usePlayer();
  const [globalData, setGlobalData] = useState<GlobalData>({
    songs: [],
    albums: [],
    artists: [],
    liked_songs: [],
    playlists: [],
  });

  async function getHomeData() {
    const getSongsPromise: Promise<Song[]> = getData(`${SONG_ENDPOINT}/query`);
    const getAlbumsPromise: Promise<Album[]> = getData(
      `${ALBUM_ENDPOINT}/query`
    );
    const getArtistsPromise: Promise<Artist[]> = getData(
      `${ARTIST_ENDPOINT}/query`
    );
    const getLikedSong: Promise<Song[]> = getData(`${USER_ENDPOINT}/favorites`);
    const getPlaylistPromise: Promise<Playlist[]> = getData(
      `${PLAYLIST_ENDPOINT}/query`
    );
    const responses = await Promise.allSettled([
      getSongsPromise,
      getAlbumsPromise,
      getArtistsPromise,
      getLikedSong,
      getPlaylistPromise,
    ]);

    const [songs, albums, artists, liked_songs, playlists] = responses.map(
      (result) => {
        if (result.status !== "fulfilled") {
          return [];
        } else {
          return (result as PromiseFulfilledResult<any>).value;
        }
      }
    );

    return {
      songs,
      albums,
      artists,
      liked_songs,
      playlists,
    };
  }

  useEffect(() => {
    getHomeData().then((data) =>
      setGlobalData({
        songs: data.songs,
        albums: data.albums,
        artists: data.artists,
        liked_songs: data.liked_songs,
        playlists: data.playlists,
      })
    );
  }, []);
  return (
    <>
      {/* <ModalProvider products={products} /> */}
      <Sidebar playlists={globalData.playlists}>
        <Outlet context={globalData}></Outlet>
      </Sidebar>
      {player.isActive && <MusicPlayer />}
    </>
  );
}
