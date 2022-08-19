import { $ } from './helpers.js';
import getTrends from './trending.js';

const main = $('.main');
const mainWrap = $('#main-wrap');
const detail = $('.detail');
const seeAll = $('.see-all');
const backButtonDetails = $('.cta-back');
const searchInput = $('#search');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
backButtonDetails.addEventListener('click', () => (location.hash = 'home'), false);
searchInput.addEventListener(
  'keypress',
  (e) => {
    if (e.key === 'Enter') {
      location.hash = 'search';
    }
  },
  false
);

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
  getTrends();
}

function categoryPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
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
