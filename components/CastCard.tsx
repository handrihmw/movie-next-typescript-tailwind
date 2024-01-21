import React from "react";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import { Cast } from "@/types/Movie";
import Image from "next/image";

const CastCard = ({ cast }: { cast: Cast }) => {
  return (
    <>
      <div className="w-full flex flex-col mb-4 p-3 bg-white shadow-lg rounded-xl">
        <div className="w-full h-[200px] md:h-[300px] rounded-lg relative">
          <Image
            className="rounded-lg aspect-auto object-fill transform hover:scale-105 transition duration-300"
            src={
              cast?.profile_path
                ? `${IMAGE_URL}${cast?.profile_path}`
                : `${EMPTY_MOVIE_URL}`
            }
            alt={cast?.name}
            fill={true}
            priority={true}
            sizes="(max-width: 300px) 100vw, (max-width: 300px) 80vw, 300px"
          />
        </div>
        <div className="flex flex-col gap-0.5 my-3">
          <h2 className="text-xl font-medium">{cast?.name}</h2>
          <h3 className="text-sm font-base text-gray-500">{cast?.character}</h3>
        </div>
      </div>
    </>
  );
};

export default CastCard;
