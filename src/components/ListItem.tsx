"use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useNavigate } from "react-router-dom";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  // const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();
  const navigate = useNavigate();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    navigate(href)
  };

  return (
    <button
      onClick={onClick}
      className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        pr-4
      "
    >
      <div className="relative max-h-[64px] max-w-[64px]">
        <img className="object-cover" src={image} alt="liked_icon" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md 
          right-5
          group-hover:opacity-100 
          hover:scale-110
        "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
