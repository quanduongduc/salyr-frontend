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
          containerClassName="w-full h-full"
          style={{ height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden w-full">
        <Skeleton count={2} />
      </div>
    </div>
  );
};

export default SkeletonSideItem;
