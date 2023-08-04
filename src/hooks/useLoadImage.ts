
import { Song } from "@/src/types";

const useLoadImage = (song: Song) => {

  if (!song) {
    return null;
  }

  // const { data: imageData } = supabaseClient
  //   .storage
  //   .from('images')
  //   .getPublicUrl(song.image_path);

  // return imageData.publicUrl;
  return "https://picsum.photos/200/300" // dump data
};

export default useLoadImage;
