import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getDiscoverMovies,
} from "@/services/api";

import DiscoverMovies from "@/components/DiscoverMovies";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";

type Props = {
  searchParams?: {
    page?: number;
  };
};

const page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;
  const popularMovies = await getPopularMovies(page);
  const topRatedMovies = await getTopRatedMovies(page);
  const upcomingMovies = await getUpcomingMovies(page);
  const discoverMovies = await getDiscoverMovies(page);

  return (
    <>
      <main className="flex flex-col">
        <DiscoverMovies discoverMovies={discoverMovies} />
        <div className="w-[1300px] max-w-full px-4 py-5 mx-auto">
          <UpcomingMovies upcomingMovies={upcomingMovies} />
          <PopularMovies popularMovies={popularMovies} />
          <TopRatedMovies topRatedMovies={topRatedMovies} />
        </div>
      </main>
    </>
  );
}

export default page;