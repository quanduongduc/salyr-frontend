import { Album, Artist, Song } from "@/types";

import PlayButton from "./PlayButton";

interface ContentItemProps {
  data: Song | Album | Artist;
  onClick: (item: Song | Album | Artist) => void;
}

const ContentItem: React.FC<ContentItemProps> = ({ data, onClick }) => {
  function resolveAttributes(data: any) {
    const cover_img_url = data.theme_url
      ? data.theme_url
      : data.cover_image_url
      ? data.cover_image_url
      : data.avatar_url;

    const itemTitle = data.name ? data.name : data.title;
    const artists = data.artists
      ? data.artists
      : data.artist
      ? [data.artist]
      : [];
    return {
      cover_img_url,
      itemTitle,
      artists,
    };
  }

  return (
    <div
      onClick={() => onClick(data)}
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <img
          className="object-cover animate-fade animate-ease-in"
          src={
            resolveAttributes(data).cover_img_url ||
            "/images/music-placeholder.png"
          }
          alt="song_image"
        ></img>
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {resolveAttributes(data).itemTitle}
        </p>
        <p
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          {resolveAttributes(data).artists.length
            ? "By " +
              resolveAttributes(data)
                .artists.map((artist: Artist) => artist.name)
                .join(",")
            : "Artist"}
          {}
        </p>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default ContentItem;
