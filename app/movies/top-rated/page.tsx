import React from "react";
import { Movie } from "@/types/Movie";
import { getTopRatedMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import Paginate from "@/components/Paginate";

type Props = {
  searchParams?: {
    page?: number;
  };
};

const topRatedPage = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <>
      <main className="mt-5 flex flex-col">
        <div className="w-[1300px] max-w-full px-4 py-5 mx-auto">
          <h1 className="text-xl md:text-2xl font-medium text-white">Top Rated Movies</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-4">
            {topRatedMovies.results.map((movie: Movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
          <Paginate
            currentPage={
              page < 1 || page > topRatedMovies.total_pages ? 1 : page
            }
            totalPages={topRatedMovies.total_pages}
            pageType="top-rated"
          />
        </div>
      </main>
    </>
  );
};

export default topRatedPage;
