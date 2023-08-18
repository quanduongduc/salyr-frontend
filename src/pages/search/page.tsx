// import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";

import SearchContent from "./SearchContent";
import { Song } from "@/types";
import { useState } from "react";
import { SONG_ENDPOINT } from "@/utils/constants";

const Search = () => {
  const [searchedSongs, setSearchedSongs] = useState<Song[]>([]);
  console.log(searchedSongs)
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
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput setSearched={setSearchedSongs} endpoint={SONG_ENDPOINT}/>
        </div>
      </Header>
      <SearchContent songs={searchedSongs} />
    </div>
  );
};

export default Search;
