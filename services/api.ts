import { MediaType, TrendingResult } from '@/interfaces/apiresults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=e990df45b8f6e2a14d54e16e1c70e993&page1`
  );
  const json = await response.json();
  return json;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=e990df45b8f6e2a14d54e16e1c70e993&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=e990df45b8f6e2a14d54e16e1c70e993`
  );

  const data = await response.json();
  return data;
};