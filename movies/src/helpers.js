import { API_KEY } from './env.js';

const $ = (selector) => document.querySelector(selector);
const createElement = (el) => document.createElement(el);

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

function getYear(date) {
  return date.slice(0, 4);
}

function getRating(votes) {
  return votes.toFixed(1);
}

function getImage(image) {
  return `https://image.tmdb.org/t/p/w500/${image}`;
}

export { $, api, createElement, getYear, getRating, getImage };
