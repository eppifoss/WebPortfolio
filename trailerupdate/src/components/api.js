import axios from 'axios';

const API_KEY = '3b86c6d6ce01cb15cdd99c7c878d4e58';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR = 'popular';
const NOW_PLAYING = 'now_playing';
const UPCOMING = 'upcoming';
const TOP_RATED = 'top_rated';

export async function getMovieList(type){
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&region=NO`
  );
  const data = response.json();
  return data;
}

export async function searchMovie(text) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&region=NO&page=1`
  );
  const data = response.json();
  return data;
}

export const getMoviesPopular = () => {
  return getMovieList(POPULAR);
}

export const getMoviesTopRated= () => {
  return getMovieList(TOP_RATED);
}

export const getMoviesUpcoming = () => {
  return getMovieList(UPCOMING);
}

export const getMoviesNowPlaying= () => {
  return getMovieList(NOW_PLAYING);
}

export async function getMovie(id){
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const data = response.json();
  return data;
}

export async function getTrailerVideo(id){
  const response = await axios(`/youtube/watch?v=${id}`);
  return response;
}
