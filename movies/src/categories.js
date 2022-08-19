import { api, createElement } from './helpers.js';

async function getCategories() {
  const { data } = await api('genre/movie/list');

  const navContainer = document.getElementById('categories');
  const category = createElement('span');
}

export default getCategories;
