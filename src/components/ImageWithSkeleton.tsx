import React from 'react';
import { useState } from 'react';

type ImageWithSkeletonProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function ImageWithSkeleton({
    src,
    alt,
    width = 50,
    height =50
}: ImageWithSkeletonProps) {

    const[imgLoaded, setImageLoaded] = useState(false);
    
  return (
    <div className="relative w-[50px] h-[200px] ">
        {!imgLoaded && (
              <div className="animate-pulse bg-gray-200"/>
            )}
        <img 
        width={width}
        height={height}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-contain transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}></img>
    </div>
  )
}
