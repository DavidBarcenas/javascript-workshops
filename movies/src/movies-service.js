import { api, head } from './helpers.js';
import Poster from './poster.js';

export async function getTrends() {
  const { data } = await api('/trending/movie/day');
  Poster(head(data.results, 5), '.trending-container', true);
}

export async function getTopRated() {
  const { data } = await api('/movie/top_rated');
  Poster(head(data.results, 8), '.top-rated-container');
}
