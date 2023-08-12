import React from "react";

// import { Figtree } from 'next/font/google'

// import getSongsByUserId from '@/actions/getSongsByUserId'

// import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import Sidebar from "@/components/Sidebar";
// import ModalProvider from '@/providers/ModalProvider'
// import SupabaseProvider from '@/providers/SupabaseProvider'
import MusicPlayer from "@/components/MusicPlayer";

import "./globals.css";
import { Outlet } from "react-router-dom";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

// const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export const revalidate = 0;

export default function Layout() {
  // const products = await getActiveProductsWithPrices();
  const player = usePlayer();
  const userSongs: Song[] = [
    {
      id: 123,
      title: "Hello",
      url: "./song.mp3",
      theme_url: "./images/liked.png",
      release_date: new Date(),
      genre: "Pop",
      duration: 222,
    },
  ]; //await getSongsByUserId();

  return (
    <>
      {/* <ModalProvider products={products} /> */}
      <Sidebar songs={userSongs}>
        <Outlet></Outlet>
      </Sidebar>
      {player.isActive && <MusicPlayer />}
    </>
  );
}

function Figtree(arg0: { subsets: string[] }) {
  throw new Error("Function not implemented.");
}
