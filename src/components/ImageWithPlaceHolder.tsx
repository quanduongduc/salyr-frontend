import React, { useState } from "react";

interface ImageWithPlaceholderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  ...imageProps
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#f0f0f0",
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-300"></div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: isLoading ? "none" : "block",
        }}
        {...imageProps}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
