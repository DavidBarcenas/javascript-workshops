import { api } from './helpers.js';

async function getCategories() {
  const { data } = await api('genre/movie/list');
  return data.genres;
}

async function getTrends() {
  const { data } = await api('/trending/movie/day');
  return data.results;
}

async function getTopRated() {
  const { data } = await api('/movie/top_rated');
  return data.results;
}

async function getPopular() {
  const { data } = await api('/movie/popular');
  return data.results;
}

async function getMoviesByCategory(id) {
  const { data } = await api('/discover/movie', {
    params: {
      with_genres: id,
    },
  });
  return data.results;
}

async function getMoviesByQuery(query) {
  const { data } = await api('/search/movie', {
    params: { query },
  });
  return data.results;
}

async function getMovieById(id) {
  const { data } = await api(`/movie/${id}`);
  return data;
}

async function getSimilarMovies(movieId) {
  const { data } = await api(`/movie/${movieId}/recommendations`);
  return data.results;
}

export {
  getCategories,
  getTrends,
  getTopRated,
  getPopular,
  getMoviesByCategory,
  getMoviesByQuery,
  getMovieById,
  getSimilarMovies,
};
