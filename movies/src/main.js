import getTrends from './trending.js';

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

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
  console.log('Home!!');
  getTrends();
}

function categoryPage() {
  console.log('CATEGORIES!!!');
}

function moviePage() {
  console.log('DETAILS!!!');
}

function searchPage() {
  console.log('SEARCH!!!');
}

function trendsPage() {
  console.log('TRENDS!!!');
}
