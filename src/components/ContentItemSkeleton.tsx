import Skeleton from "react-loading-skeleton";

const ContentItemSkeleton = () => {
  return (
    <div
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Skeleton containerClassName="block w-full h-full"  height="100%"/>
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
            <Skeleton/>  
        </p>
        <p
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
            <Skeleton/>
        </p>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
      </div>
    </div>
  );
};

export default ContentItemSkeleton;
