"use client";

import { useEffect } from "react";
import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import { useNavigate } from "react-router-dom";

interface LikedContentProps {
  songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  // const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
        navigate('/')
    }
  }, [isLoading, user]);

  if (songs.length === 0) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full px-6 
          text-neutral-400
        "
      >
        No liked songs.
      </div>
    )
  }
  return ( 
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song: any) => (
        <div 
          key={song.id} 
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default LikedContent;
