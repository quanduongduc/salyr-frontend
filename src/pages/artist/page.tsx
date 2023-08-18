import Header from "@/components/Header";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Artist } from "@/types";
import { useParams } from "react-router-dom";
import ArtistContent from "./ArtistContent";
import { useEffect, useState } from "react";
import { getData, resolveResponseError } from "@/utils/helpers";
import { ARTIST_ENDPOINT } from "@/utils/constants";

const ArtistPage = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const [artist, setArtist] = useState<Artist | undefined>();

  async function fetchAlbumById(id: string | undefined) {
    try {
      if (id) {
        const response = await getData(`${ARTIST_ENDPOINT}/${id}`);
        return response;
      } else {
        return undefined;
      }
    } catch (error) {
      resolveResponseError(error);
      return undefined;
    }
  }

  useEffect(() => {
    fetchAlbumById(id).then((data) => setArtist(data));
  }, [id]);

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
          <div className="flex items-center gap-x-2">
            <VscVerifiedFilled className="" />
            <p className="text-white text-sm">Verified Artist</p>
          </div>
          <h1 className="text-white text-3xl font-semibold">{artist?.name}</h1>
          {/* <SearchInput /> */}
        </div>
      </Header>
      <ArtistContent songs={artist?.songs || []} />
    </div>
  );
};

export default ArtistPage;
