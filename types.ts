export interface User {
  id: number;
  username: string;
  email: string;
  avatar_url: string;
  created_at: Date;
  playlists?: Playlist[];
  last_play?: Song
}

export interface Song {
  id: number;
  title: string;
  release_date: Date;
  duration: number;
  genre: string;
  url: string,
  theme_url: string,
  artists?: Artist[];
  albums?: Album[];
}

export interface Album {
  id: number;
  title: string;
  artist_id: number;
  release_date: Date;
  cover_image_url: string;
  artist: Artist;
  songs: Song[];
}

export interface Artist {
  id: number;
  name: string;
  bio: string;
  genre: string;
  avatar_url: string;
  albums?: Album[];
  songs?: Song[];
}

export interface Playlist {
  id: number;
  user_id: number;
  title: string;
  creation_date: Date;
  user?: User;
  songs?: Song[];
}