import { Album, Artist, Song } from "@/types";
import ContentItem from "./ContentItem";
import useOnPlay from "../hooks/useOnPlay";
import { useNavigate } from "react-router-dom";

interface HomeContentItemProps {
  items: Song[] | Album[] | Artist[];
}

const HomeContentItem: React.FC<HomeContentItemProps> = ({ items }) => {
  const onPlay = useOnPlay(songTypeCheck(items[0]) ? (items as Song[]) : []);

  function songTypeCheck(item: any) {
    try {
      return item.duration;
    } catch (error) {
      return false;
    }
  }

  function resolveNavigationPath(item: any) {
    const temp = item.avatar_url;
    if (temp) return "artist";
    return "album";
  }

  const navigate = useNavigate();

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
      {songTypeCheck(items[0])
        ? items.map((item) => (
            <ContentItem
              onClick={(item) => onPlay(item as Song)}
              key={item.id}
              data={item as Song}
            />
          ))
        : items.map((item) => (
            <ContentItem
              onClick={(item) =>
                navigate(`/${resolveNavigationPath(item)}/${item.id}`)
              }
              key={item.id}
              data={item as Song}
            />
          ))}
    </div>
  );
};

export default HomeContentItem;
