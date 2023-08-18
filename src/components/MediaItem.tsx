"use client";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (song: Song) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data);
    }

    return player.setActiveSong(data);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          max-h-[48px] 
          max-w-[48px] 
          overflow-hidden
        "
      >
        <img
          src={data.theme_url || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover animate-fade animate-ease-in"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">
          By{" "}
          {data.artists && data.artists.map((artist) => artist.name).join(",")}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
