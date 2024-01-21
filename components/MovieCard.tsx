import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import { Movie } from "@/types/Movie";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <Link
        href={`/movie/${movie?.id}`}
        className="relative block bg-gray-900 group h-[305px] w-auto rounded-xl"
      >
        <Image
          className="absolute shadow-lg aspect-square inset-0 object-fill w-full h-full group-hover:opacity-50 rounded-xl"
          src={
            movie?.poster_path
              ? `${IMAGE_URL}${movie?.poster_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={movie?.title}
          fill={true}
          priority={true}
          sizes="(max-width: 305px) 100vw, (max-width: 305px) 80vw, 305px"
        />
        <div className="relative p-2">
          <div className="mt-40">
            <div className="relative transition-all duration-75 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div
                className={`absolute -top-[160px] right-0 block h-[30px] w-auto px-2 py-1 text-white shadow-lg rounded-lg ${
                  movie?.vote_average < 5
                    ? `bg-red-500`
                    : movie?.vote_average == 5
                    ? `bg-orange-500`
                    : `bg-green-700`
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  {movie?.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="bg-opacity-50 backdrop-blur-lg backdrop-filter p-2 rounded-lg">
                <h2 className="text-xl text-white font-medium line-clamp-1">
                  {movie?.title}
                </h2>
                <div className="text-base text-white mb-3">
                  {dayjs(movie?.release_date).format("YYYY")}
                </div>
                <p className="text-xs font-light line-clamp-3 text-white">
                  {movie?.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
