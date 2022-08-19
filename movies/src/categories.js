import { $, api, createElement } from './helpers.js';

async function getCategories() {
  const { data } = await api('genre/movie/list');
  const categoriesContainer = $('.categories-container');

  data.genres.forEach((genre) => {
    const category = createElement('span');
    category.textContent = genre.name;
    category.setAttribute('id', genre.id);

    categoriesContainer.appendChild(category);
  });
}

export default getCategories;
