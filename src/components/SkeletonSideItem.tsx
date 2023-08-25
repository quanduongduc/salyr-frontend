import { SKELETON_STYLE } from "@/utils/constants";
import Skeleton from "react-loading-skeleton";

const SkeletonSideItem = () => {
  return (
    <div
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          h-[48px] 
          w-[48px] 
          overflow-hidden
        "
      >
        <Skeleton
          baseColor="#232628"
          highlightColor="#1e2021"
          containerClassName="w-full h-full"
          style={{ ...SKELETON_STYLE, height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden w-full">
        <Skeleton count={2} style={SKELETON_STYLE} />
      </div>
    </div>
  );
};

export default SkeletonSideItem;
