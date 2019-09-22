

import axios from 'axios';

const API_KEY = '3b86c6d6ce01cb15cdd99c7c878d4e58';
const BASE_URL = 'https://api.themoviedb.org/3';



export async function getMoviesPopular(){
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = response.json();
  return data;
}


export async function getMovie(id){
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const data = response.json();
  console.log(data);
  return data;
}

export async function getTrailerVideo(id){
  const response = await axios(`/youtube/watch?v=${id}`);
  return response;
}
