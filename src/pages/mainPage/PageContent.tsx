"use client";

import { Album, Artist, Song } from "@/types";
import HomeContentItem from "@/components/HomeContentItem";

interface PageContentProps {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
}

const PageContent: React.FC<PageContentProps> = ({
  songs,
  albums,
  artists,
}) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <HomeContentItem items={songs} />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Hot Ablums</h1>
        </div>
        <HomeContentItem items={albums} />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Best Artists of The Year
          </h1>
        </div>
        <HomeContentItem items={artists} />
      </div>
    </>
  );
};

export default PageContent;
