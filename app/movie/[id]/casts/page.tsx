import { Movie, Cast } from "@/types/Movie";
import {
  getMovieCasts
} from "@/services/api";
import CastCard from "@/components/CastCard";

interface IParamsCasts {
  params: {
    id: Movie["id"];
  };
}

const page = async ({ params }: IParamsCasts) => {
  const { id } = params;

  const movieCast = await getMovieCasts(id);

  return (
    <>
      <main className="mt-5 flex flex-col mb-6">
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <div className="flex flex-col mb-6 mt-6">
            <h1 className="text-xl md:text-2xl font-medium text-white">All Cast</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
            {movieCast?.cast?.map((cast: Cast) => (
              <CastCard key={cast?.id} cast={cast} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
