"use client";

import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
// import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { GlobalData } from "@/pages/layout/Layout";
import { useOutletContext } from "react-router-dom";
import { postData, resolveResponseError } from "@/utils/helpers";
import { USER_ENDPOINT } from "@/utils/constants";

interface LikeButtonProps {
  songId: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  songId
}) => {
  const globalData = useOutletContext<GlobalData>()
  const liked_songs = globalData?.liked_songs || []
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }
  
    const isLiked = liked_songs.some(song => song.id === parseInt(songId));
    setIsLiked(isLiked)
  }, [songId, user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      try {
        const response = await postData({
          url: `${USER_ENDPOINT}/remove-favorites/${songId}`
        })
        setIsLiked(false);
        toast.success(response.message);
      } catch (error) {
          resolveResponseError(error)
      }
    } else {
      try {
        const response = await postData({
          url: `${USER_ENDPOINT}/favorites/${songId}`
        })
        setIsLiked(true);
        toast.success(response.message);
      } catch (error) {
          resolveResponseError(error)
      }
    }
  }

  return (
    <button 
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleLike}
    >
      <Icon color={isLiked ? '#22c55e' : 'white'} size={25} />
    </button>
  );
}

export default LikeButton;
