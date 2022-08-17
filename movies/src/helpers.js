const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

function createElement(el) {
  return document.createElement(el);
}

function getYear(date) {
  return date.slice(0, 4);
}

function getRating(votes) {
  return votes.toFixed(1);
}

function getImage(image) {
  return `https://image.tmdb.org/t/p/w500/${image}`;
}

export { api, createElement, getYear, getRating, getImage };
