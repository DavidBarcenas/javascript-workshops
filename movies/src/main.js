import getCategories from './categories.js';
import getTrends from './trending.js';
import { $ } from './helpers.js';

const main = $('.main');
const mainWrap = $('#main-wrap');
const detail = $('.detail');
const seeAll = $('.see-all');
const backButtonDetails = $('.cta-back');
const searchInput = $('#search');
const categoriesContainer = $('.categories-container');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
backButtonDetails.addEventListener('click', () => (location.hash = 'home'), false);
searchInput.addEventListener('keypress', (e) => handleSearch(e), false);
categoriesContainer.addEventListener('click', (e) => handleCategory(e), false);

function navigator() {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    moviePage();
  } else if (location.hash.startsWith('#category=')) {
    categoryPage();
  } else {
    homePage();
  }
}

function homePage() {
  seeAll.classList.add('hide');
  detail.classList.add('hide');
  main.classList.remove('hide');
  getCategories();
  getTrends();
}

function categoryPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
  getCategories();
}

function moviePage() {
  main.classList.add('hide');
  seeAll.classList.add('hide');
  detail.classList.remove('hide');
}

function searchPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
}

function trendsPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
}

function handleCategory(e) {
  if (e.target.nodeName?.toLowerCase() === 'span') {
    removeActiveCategories();
    document.getElementById(e.target.id).classList.add('active');
    location.hash = `category=${e.target.id}`;
  }
}

function removeActiveCategories() {
  document
    .querySelectorAll('.categories-container span')
    .forEach((e) => e.classList.remove('active'));
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    location.hash = 'search';
  }
}
