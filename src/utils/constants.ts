import { getURL } from "./helpers";

export const API_URL = getURL()
export const USER_ENDPOINT = `${API_URL}users`;
export const SONG_ENDPOINT = `${API_URL}songs`;
export const ALBUM_ENDPOINT = `${API_URL}albums`
export const PLAYLIST_ENDPOINT = `${API_URL}playlists`
export const ARTIST_ENDPOINT = `${API_URL}artists`
export const AUTH_ENDPOINT = `${API_URL}auth`
export const RANDOM_IMG_URL = `https://picsum.photos/200`
export const SKELETON_STYLE = {
    "--base-color": "#232628",
    "--highlight-color": "#1e2021"
} as React.CSSProperties;