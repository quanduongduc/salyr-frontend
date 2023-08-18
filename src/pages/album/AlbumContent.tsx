"use client";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import { nanoid } from "nanoid";

interface AlbumContentProps {
  songs: Song[];
}

const AlbumContent: React.FC<AlbumContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No songs found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song: Song) => (
        <div key={nanoid()} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(song: Song) => onPlay(song)} data={song} />
          </div>
          <LikeButton songId={song.id.toString()} />
        </div>
      ))}
    </div>
  );
};

export default AlbumContent;
