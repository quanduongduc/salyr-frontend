"use client";
import { Playlist } from "@/types"; // Make sure to import the correct type
import { RANDOM_IMG_URL } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

interface MediaItemProps {
  data: Playlist; // Update the data type to Playlist
  onClick?: (playlist: Playlist) => void; // Update the onClick type
}

const PlaylistItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
const navigate = useNavigate();    
  const handleClick = () => {
    if (onClick) {
      return onClick(data);
    }

    navigate(`/playlists/${data.id}`);
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
          src={RANDOM_IMG_URL}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title[0].toUpperCase() + data.title.slice(1, data.title.length)}</p>
        <p className="text-neutral-400 text-sm truncate">Playlist</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
