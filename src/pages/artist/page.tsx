// import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";

import { Song } from "@/types";
import { song1, song2 } from "@/utils/mockData";
import { useParams } from "react-router-dom";
import ArtistContent from "./ArtistContent";

const ArtistPage = () => {
  const id = useParams();
  const songs: Song[] = [song1, song2]; //await getSongsByTitle(searchParams.title);
  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Verified Artist</h1>
          <SearchInput />
        </div>
      </Header>
      <ArtistContent songs={songs} />
    </div>
  );
};

export default ArtistPage;
