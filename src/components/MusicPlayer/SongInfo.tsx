import React from "react";
import MediaItem from "../MediaItem";
import LikeButton from "../LikeButton";
import { Song } from "@/types";

interface SongInfoProps {
  song: Song;
}

const SongInfo: React.FC<SongInfoProps> = ({ song }) => {
  return (
    <>
      <div className="flex items-center gap-x-4">
        <MediaItem data={song} />
        <LikeButton songId={song.id} />
      </div>
    </>
  );
};

export default SongInfo;
