import renderCategories from './categories.js';
import renderPoster from './poster.js';
import renderSidebar from './sidebar.js';
import { api, head } from './helpers.js';

let categories = [];

export async function getCategories() {
  const { data } = await api('genre/movie/list');
  categories = data.genres;
  renderCategories(categories);
}

export async function getTrends() {
  const { data } = await api('/trending/movie/day');
  renderPoster(head(data.results, 5), '.trending-container', true);
}

export async function getTopRated() {
  const { data } = await api('/movie/top_rated');
  renderPoster(head(data.results, 8), '.top-rated-container');
}

export async function getPopular() {
  const { data } = await api('/movie/popular');
  renderSidebar(head(data.results, 5), categories);
}
