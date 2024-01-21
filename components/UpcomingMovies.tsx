import React from "react";
import Link from "next/link";
import { Movie } from "@/types/Movie";
import MovieCard from "./MovieCard";

const UpcomingMovies = ({ upcomingMovies }: { upcomingMovies: any }) => {
  return (
    <>
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl md:text-2xl font-medium text-white">Upcoming Movies</h1>
          <Link
            href="/movies/upcoming"
            className="flex items-center gap-2 py-2 px-5 text-md font-normal text-white"
          >
            See all{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
          {upcomingMovies.results.slice(0, 4).map((movie: Movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingMovies;
