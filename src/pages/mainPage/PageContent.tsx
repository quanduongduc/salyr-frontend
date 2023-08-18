"use client";
import { Album, Artist, Song } from "@/types";
import HomeContentItem from "@/components/HomeContentItem";
import ContentItemSkeleton from "@/components/ContentItemSkeleton";
import { nanoid } from "nanoid";

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
  const showSkeleton = () => {
    return (
      <div
        className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-8 
      gap-4 
      mt-4
    "
      >
        {Array.from(Array(10), (_, i) => (
          <ContentItemSkeleton key={nanoid()} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        {songs.length === 0 ? (
          showSkeleton()
        ) : (
          <HomeContentItem items={songs} />
        )}
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Hot Ablums</h1>
        </div>
        {albums.length === 0 ? (
          showSkeleton()
        ) : (
          <HomeContentItem items={albums} />
        )}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Best Artists of The Year
          </h1>
        </div>
        {artists.length === 0 ? (
          showSkeleton()
        ) : (
          <HomeContentItem items={artists} />
        )}
      </div>
    </>
  );
};

export default PageContent;
