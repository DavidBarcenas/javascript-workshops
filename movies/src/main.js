import { getCategories, getPopular, getTopRated, getTrends } from './movies-service.js';
import { $, head } from './helpers.js';
import renderCategories from './categories.js';
import renderPoster from './poster.js';
import renderSidebar from './sidebar.js';

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

  Promise.all([getCategories(), getTrends(), getTopRated(), getPopular()]).then(
    ([categories, trends, top, popular]) => {
      renderCategories(categories);
      renderPoster(trends, '.trending-container', true);
      renderPoster(top, '.top-rated-container');
      renderSidebar(head(popular, 5), categories);
    }
  );
}

function categoryPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
  renderCategories(getCategories());
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
