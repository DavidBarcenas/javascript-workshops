import { $, head } from './helpers.js';
import renderCategories from './categories.js';
import renderPoster from './poster.js';
import renderSidebar from './sidebar.js';
import renderDetails from './details.js';
import {
  getCategories,
  getMovieById,
  getMoviesByCategory,
  getMoviesByQuery,
  getPopular,
  getSimilarMovies,
  getTopRated,
  getTrends,
} from './movies-service.js';

const main = $('.main');
const mainWrap = $('#main-wrap');
const detail = $('.detail');
const seeAll = $('.see-all');
const searchInput = $('#search');
const categoriesContainer = $('.categories-container');
const linkToHome = $('.nav-group ul li');
let currentPage = 1;
let maxPage = 0;
let getPaginatedMovies;

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
searchInput.addEventListener('keypress', (e) => handleSearch(e), false);
categoriesContainer.addEventListener('click', (e) => handleCategory(e), false);
linkToHome.addEventListener('click', (e) => (location.hash = 'home'), false);

const categories = await getCategories();
renderCategories(categories);

function navigator() {
  currentPage = 1;
  removeScrollListener();

  if (location.hash.startsWith('#movie=')) {
    moviePage();
  } else if (location.hash.startsWith('#category=')) {
    movieCategoryPage().cleanSection();
    movieCategoryPage().render();
    getPaginatedMovies = movieCategoryPage().render;
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else {
    homePage();
  }

  window.scrollTo(0, 0);
  addScrollListener();
}

function homePage() {
  seeAll.classList.add('hide');
  detail.classList.add('hide');
  main.classList.remove('hide');
  mainWrap.classList.remove('hide');
  $('.see-all h2').classList.remove('hide');
  $('.trending-container').innerHTML = '';
  $('.top-rated-container').innerHTML = '';
  $('.see-all-container').innerHTML = '';

  Promise.all([getTrends(), getTopRated(), getPopular()]).then(([trends, top, popular]) => {
    renderPoster(trends, '.trending-container', true, 'w500');
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
      $('.see-all h2').textContent = 'Top rated';
      renderPoster(top, '.see-all-container');
    }

    if (location.hash.startsWith('#popular')) {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all h2').textContent = 'Popular';
      renderPoster(popular, '.see-all-container');
    }
  });
}

function movieCategoryPage() {
  return {
    cleanSection: () => {
      mainWrap.classList.add('hide');
      seeAll.classList.remove('hide');
      $('.see-all-container').innerHTML = '';
    },
    render: () => {
      const [_, id] = location.hash.split('=');
      getMoviesByCategory(id, currentPage).then((movies) => {
        $('.see-all h2').classList.add('hide');
        renderPoster(movies, '.see-all-container');
        currentPage = currentPage + 1;
      });
    },
  };
}

function moviePage() {
  main.classList.add('hide');
  seeAll.classList.add('hide');
  detail.classList.remove('hide');
  $('.similar-movies').innerHTML = '';

  const [_, id] = location.hash.split('=');
  Promise.all([getMovieById(id), getSimilarMovies(id)]).then(([movie, similarMovies]) => {
    renderDetails(movie, categories);
    renderPoster(similarMovies, '.similar-movies');
  });
}

function searchPage() {
  mainWrap.classList.add('hide');
  seeAll.classList.remove('hide');
  $('.see-all-container').innerHTML = '';

  const [_, query] = location.hash.split('=');
  getMoviesByQuery(query).then((movies) => {
    $('.see-all h2').textContent = query;
    renderPoster(movies, '.see-all-container');
  });
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
    location.hash = `search=${e.target.value}`;
  }
}

function infiniteScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollIsBottom = scrollTop + clientHeight >= scrollHeight - 10;
  const hasMorePages = currentPage < maxPage;
  if (scrollIsBottom && hasMorePages) {
    getPaginatedMovies();
  }
}

function removeScrollListener() {
  if (getPaginatedMovies) {
    window.removeEventListener('scroll', infiniteScroll);
    getPaginatedMovies = undefined;
  }
}

function addScrollListener() {
  if (getPaginatedMovies) {
    window.addEventListener('scroll', infiniteScroll, { passive: false });
  }
}
