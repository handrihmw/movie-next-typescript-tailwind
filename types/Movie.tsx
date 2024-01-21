export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  release_date: string;
};

export type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};

export type IPaginate = {
  currentPage: number;
  totalPages: number;
  pageType: string;
};
