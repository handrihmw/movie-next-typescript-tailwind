import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetcher = (url: string) => axios(url).then((res) => res.data);

export const movie = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip,deflate,compress",
  },
  params: {
    api_key: API_KEY,
  },
});

export const getDiscoverMovies = async () => {
  try {
    const response = await movie.get(`discover/movie`, {
      params: {
        sort_by: "popularity.desc",
      },
    });
    return response?.data.results;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getPopularMovies = async (page: number) => {
  try {
    const response = await movie.get(`movie/popular`, {
      params: {
        page: page,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getUpcomingMovies = async (page: number) => {
  try {
    const response = await movie.get(`movie/upcoming`, {
      params: {
        page: page,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getTopRatedMovies = async (page: number) => {
  try {
    const response = await movie.get(`movie/top_rated`, {
      params: {
        page: page,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getMovieDetails = async (movie_id: number) => {
  try {
    const response = await movie.get(`movie/${movie_id}`, {
      params: {
        movie_id: movie_id,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getMovieCasts = async (movie_id: number) => {
  try {
    const response = await movie.get(`movie/${movie_id}/credits`, {
      params: {
        movie_id: movie_id,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};

export const getMovieRecommendations = async (movie_id: number) => {
  try {
    const response = await movie.get(`movie/${movie_id}/recommendations`, {
      params: {
        movie_id: movie_id,
      },
    });
    return response?.data;
  } catch (error: any) {
    const { response } = error;
    return response.status;
  }
};
