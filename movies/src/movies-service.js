import { api } from './helpers.js';

async function getCategories() {
  const { data } = await api('genre/movie/list');
  return data.genres;
}

async function getTrends() {
  const { data } = await api('/trending/movie/day');
  return data;
}

async function getTopRated() {
  const { data } = await api('/movie/top_rated');
  return data;
}

async function getPopular() {
  const { data } = await api('/movie/popular');
  return data;
}

export { getCategories, getTrends, getTopRated, getPopular };
