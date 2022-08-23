import { api } from './helpers.js';
import Poster from './poster.js';

export async function getTrends() {
  const { data } = await api('/trending/movie/day');
  Poster(data.results, '.trending-container', true);
}
