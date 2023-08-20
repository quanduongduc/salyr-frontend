"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Playlist } from "@/types";

import SidebarItem from "./SidebarItem";
import Box from "./Box";
import Library from "./Library";
import { useMemo } from "react";
import { nanoid } from "nanoid";

interface SidebarProps {
  playlists: Playlist[];
}

const Sidebar = ({ playlists }: SidebarProps) => {
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        // active: pathname !== '/search',
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        // active: pathname === '/search'
      },
    ],
    [
      // pathname
    ]
  );

  return (
    <div
      className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
    >
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem key={nanoid()} {...item} />
          ))}
        </div>
      </Box>
      <Box className="overflow-y-auto h-full">
        <Library playlists={playlists} />
      </Box>
    </div>
  );
};

export default Sidebar;
