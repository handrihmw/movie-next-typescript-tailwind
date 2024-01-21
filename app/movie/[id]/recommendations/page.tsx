import { Movie } from "@/types/Movie";
import { getMovieRecommendations } from "@/services/api";
import MovieCard from "@/components/MovieCard";

interface IParamsRecommendations {
  params: {
    id: Movie["id"];
  };
}

const page = async ({ params }: IParamsRecommendations) => {
  const { id } = params;

  const movieRecommendations = await getMovieRecommendations(id);

  return (
    <>
      <main className="mt-5 flex flex-col mb-6 h-auto">
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <div className="flex flex-col mb-6 mt-6">
            <h1 className="text-xl md:text-2xl font-medium text-white">All Recommendations</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
            {movieRecommendations?.results?.map((movie: Movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
