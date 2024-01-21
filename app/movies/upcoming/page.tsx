import React from "react";
import { Movie } from "@/types/Movie";
import { getUpcomingMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import Paginate from "@/components/Paginate";

type Props = {
  searchParams?: {
    page?: number;
  };
};

const upcomingPage = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const upcomingMovies = await getUpcomingMovies(page);

  {
    console.log(upcomingMovies);
  }

  return (
    <>
      <main className="mt-5 flex flex-col">
        <div className="w-[1300px] max-w-full px-4 py-5 mx-auto">
          <h1 className="text-xl md:text-2xl font-medium text-white">Upcoming Movies</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-4">
            {upcomingMovies.results.map((movie: Movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
          <Paginate
            currentPage={
              page < 1 || page > upcomingMovies.total_pages ? 1 : page
            }
            totalPages={upcomingMovies.total_pages}
            pageType="upcoming"
          />
        </div>
      </main>
    </>
  );
};

export default upcomingPage;
