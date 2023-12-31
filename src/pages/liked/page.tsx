import Header from "@/components/Header";

import LikedContent from "./LikedContent";
import { useOutletContext } from "react-router-dom";
import { GlobalData } from "../layout/Layout";

const Liked = () => {
  const { liked_songs } = useOutletContext<GlobalData>();
  return (
    <>
      <Header>
        <div className="mt-20">
          <div
            className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
          >
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <img
                className="object-cover"
                src="/images/liked.png"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1
                className="
                  text-white 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  font-bold
                "
              >
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={liked_songs} />
    </>
  );
};

export default Liked;
