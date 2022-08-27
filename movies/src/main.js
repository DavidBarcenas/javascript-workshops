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
const linkToHome = $('.nav-group ul li');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
backButtonDetails.addEventListener('click', () => (location.hash = 'home'), false);
searchInput.addEventListener('keypress', (e) => handleSearch(e), false);
categoriesContainer.addEventListener('click', (e) => handleCategory(e), false);
linkToHome.addEventListener('click', (e) => (location.hash = 'home'), false);

async function navigator() {
  const categories = await getCategories();
  renderCategories(categories);

  if (location.hash.startsWith('#movie=')) {
    moviePage();
  } else if (location.hash.startsWith('#category')) {
    movieCategoryPage();
  } else {
    homePage(categories);
  }
}

function homePage(categories) {
  seeAll.classList.add('hide');
  detail.classList.add('hide');
  main.classList.remove('hide');
  mainWrap.classList.remove('hide');

  Promise.all([getTrends(), getTopRated(), getPopular()]).then(([trends, top, popular]) => {
    renderPoster(trends, '.trending-container', true);
    renderPoster(top, '.top-rated-container');
    renderSidebar(head(popular, 5), categories);

    if (location.hash.startsWith('#trends')) {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all h2').textContent = 'Trending';
      renderPoster(trends, '.see-all-container');
    }

    if (location.hash.startsWith('#top')) {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all h2').textContent = 'Top';
      renderPoster(top, '.see-all-container');
    }

    if (location.hash.startsWith('#popular')) {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all h2').textContent = 'Popular';
      renderPoster(popular, '.see-all-container');
    }

    if (location.hash.startsWith('#search')) {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all h2').textContent = 'Search';
      renderPoster(popular, '.see-all-container');
    }
  });
}

function movieCategoryPage(movies) {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
  $('.see-all h2').textContent = 'Category';
  renderPoster(movies, '.see-all-container');
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
