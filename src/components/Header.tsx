"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer();
  const navigate = useNavigate();
  const authModal = useAuthModal();
  const auth = useAuth();

  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await auth.logout();
      player.reset();
      navigate(0);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="sticky left-0 top-0 w-full mb-4 flex items-center justify-between z-50 bg-neutral-900 px-3">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => navigate(-1)}
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button onClick={() => navigate("/account")}>
                <img
                  src={user.avatar_url}
                  alt="User Avatar"
                  className="m-0 rounded-full w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 object-fill"
                />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={twMerge(
          `
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-6
        `,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Header;
