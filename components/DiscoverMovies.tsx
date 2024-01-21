import React from "react";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import Image from "next/image";

const DiscoverMovies = ({ discoverMovies }: { discoverMovies: any[] }) => {
  const getRandomIndices = () => {
    const randomIndices: any = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * 6);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices;
  };

  const randomIndex = getRandomIndices()[0];

  return (
    <>
      <div className="w-full h-[800px] relative -top-8 mb-10">
        <Image
          className="w-full object-cover aspect-auto"
          src={
            discoverMovies[randomIndex]?.backdrop_path
              ? `${IMAGE_URL}${discoverMovies[randomIndex]?.backdrop_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={discoverMovies[randomIndex]?.title}
          fill={true}
          priority={true}
          sizes="(max-width: 800px) 100vw, (max-width: 800px) 80vw, 800px"
        />
        <div className="absolute w-full p-6 rounded-lg bottom-0">
          <h1 className="text-3xl md:text-5xl text-white font-sm md:font-medium mb-2">
            {discoverMovies[randomIndex]?.title}
          </h1>
          <p className="text-base font-light text-white md:w-3/6">
            {discoverMovies[randomIndex]?.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export default DiscoverMovies;
