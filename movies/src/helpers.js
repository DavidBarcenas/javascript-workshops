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

function getImage(image, size = 'w300') {
  return `https://image.tmdb.org/t/p/${size}${image}`;
}

function head(list, count) {
  return list.slice(0, count);
}

function createObserver(parent) {
  const options = {
    root: document.querySelector(parent),
    rootMargin: '0px',
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const urlImg = entry.target.getAttribute('data-img');
        entry.target.setAttribute('src', urlImg);
      }
    });
  }, options);
  return observer;
}

export { $, api, createElement, getYear, getRating, getImage, head, createObserver };
