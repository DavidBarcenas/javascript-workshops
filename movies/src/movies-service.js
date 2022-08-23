import { api } from './helpers.js';
import Poster from './poster.js';

export async function getTrends() {
  const { data } = await api('/trending/movie/day');
  Poster(data.results, '.trending-container', true);
}

export async function getTopRated() {
  const { data } = await api('/movie/top_rated');
  Poster(data.results, '.top-rated-container');
}
