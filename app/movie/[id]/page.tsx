import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import { Movie, Cast } from "@/types/Movie";
import {
  getMovieDetails,
  getMovieCasts,
  getMovieRecommendations,
} from "@/services/api";
import CastCard from "@/components/CastCard";
import MovieCard from "@/components/MovieCard";

interface IParamsMovieDetails {
  params: {
    id: Movie["id"];
  };
}

const page = async ({ params }: IParamsMovieDetails) => {
  const { id } = params;
  const movie = await getMovieDetails(id);
  const credits = await getMovieCasts(id);
  const recommendations = await getMovieRecommendations(id);

  const durationHours = Math.round(movie?.runtime / 60);
  const durationMinutes = Math.round(movie?.runtime % 60);

  return (
    <>
      <main className="my-5 flex flex-col">
        <div className="container max-w-full px-5 mx-auto">
          <div className="flex flex-col md:px-20 mt-6">
            <div className="flex flex-col md:flex-row gap-7">
              <div className="flex relative">
                <div className="w-[600px] h-[400px] relative">
                  <Image
                    src={
                      movie?.backdrop_path
                        ? `${IMAGE_URL}${movie?.backdrop_path}`
                        : `${EMPTY_MOVIE_URL}`
                    }
                    className="rounded-lg shadow-lg aspect-square"
                    alt={movie?.title}
                    fill={true}
                    priority={true}
                    sizes="(max-width: 600px) 100vw, (max-width: 600px) 80vw, 600px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <h2 className="text-xl md:text-2xl font-medium text-white">
                    {movie?.title}
                  </h2>
                  <span
                    className={`flex flex-col px-2 py-1 text-white rounded-md ${
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
                  </span>
                </div>
                <div className="flex gap-4 items-center mt-4 text-gray-200">
                  <p className="text-md font-medium">
                    {dayjs(movie?.release_date).format("MMM DD YYYY")}
                  </p>
                  •
                  {movie?.runtime > 0 && (
                    <>
                      <p className="text-md font-medium">{`${durationHours}h ${durationMinutes}m`}</p>
                      •
                    </>
                  )}
                  <p className="text-md font-medium">
                    {movie?.genres?.map((genre: any) => genre?.name).join(", ")}
                  </p>
                </div>
                <div className="flex flex-col mt-5">
                  <p className="text-md font-normal text-white">
                    {movie?.overview}
                  </p>
                </div>
                <div className="flex text-4xl text-gray-400 gap-x-4 mt-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="cursor-pointer hover:scale-105 hover:text-gray-200 duration-500"
                    height="2rem"
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3p72.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="cursor-pointer hover:scale-105 hover:text-gray-200 duration-500"
                    height="2rem"
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="cursor-pointer hover:scale-105 hover:text-gray-200 duration-500"
                    height="2rem"
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <div className="flex flex-col mb-6 mt-6">
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-xl md:text-2xl font-medium text-white">Cast</h1>
              <Link
                href={`/movie/${id}/casts`}
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
              {credits?.cast?.length > 0 ? (
                credits?.cast
                  ?.slice(0, 4)
                  .map((cast: Cast) => <CastCard key={cast?.id} cast={cast} />)
              ) : (
                <p className="text-md font-normal mt-4">
                  No cast information found.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-6 mt-6">
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-xl md:text-2xl font-medium text-white">
                Recommendations
              </h1>
              {recommendations?.results?.length > 0 && (
                <Link
                  href={`/movie/${id}/recommendations`}
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
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
              {recommendations?.results?.length > 0 ? (
                recommendations?.results
                  ?.slice(0, 4)
                  .map((movie: Movie) => (
                    <MovieCard key={movie?.id} movie={movie} />
                  ))
              ) : (
                <p className="text-md font-normal text-red-300 mt-4">
                  No recommendations found.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
