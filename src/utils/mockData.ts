import { Album, Artist, Song } from "@/types";

// Generate mock data
export const artist1: Artist = {
    id: 1,
    name: "John Doe",
    bio: "A talented musician",
    genre: "Pop",
    avatar_url: "https://picsum.photos/200/300"
};

export const artist2: Artist = {
    id: 2,
    name: "Jane Smith",
    bio: "An amazing singer-songwriter",
    genre: "Rock",
    avatar_url: "https://picsum.photos/200/300"
};


export const song1: Song = {
    id: 1,
    title: "Catchy Song",
    release_date: new Date("2020-03-10"),
    duration: 240,
    genre: "Pop",
    url: "/song.mp3",
    theme_url: "https://picsum.photos/200/300",
    artists: [artist1],
};

export const song2: Song = {
    id: 2,
    title: "Power Ballad",
    release_date: new Date("2018-06-01"),
    duration: 320,
    genre: "Rock",
    url: "/song.mp3",
    theme_url: "https://picsum.photos/200/300",
    artists: [artist2],
};

export const album2: Album = {
    id: 2,
    title: "Rock Anthems",
    artist_id: 2,
    release_date: new Date("2018-05-20"),
    cover_image_url: "https://picsum.photos/200/300",
    artist: artist2,
    songs: [song1, song2],
};

export const album1: Album = {
    id: 1,
    title: "Greatest Hits",
    artist_id: 1,
    release_date: new Date("2020-01-15"),
    cover_image_url: "https://picsum.photos/200/300",
    artist: artist1,
    songs: [song1],
};



