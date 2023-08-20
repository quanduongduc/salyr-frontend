"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { Playlist } from "@/types";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

import { useNavigate } from "react-router-dom";
import PlaylistItem from "./PlaylistItem";
import SkeletonSideItem from "./SkeletonSideItem";
import { nanoid } from "nanoid";

interface LibraryProps {
  playlists: Playlist[];
}

const Library: React.FC<LibraryProps> = ({ playlists }) => {
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {playlists.length
          ? playlists.map((playlist) => (
              <PlaylistItem
                onClick={(playlist: Playlist) =>
                  navigate(`/playlist/${playlist.id}`)
                }
                key={nanoid()}
                data={playlist}
              />
            ))
          : user &&
            Array.from(Array(10), (_, i) => (
              <SkeletonSideItem key={nanoid()} />
            ))}
      </div>
    </div>
  );
};

export default Library;
