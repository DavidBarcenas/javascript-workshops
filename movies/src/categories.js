import { $, createElement } from './helpers.js';

async function renderCategories(categories) {
  categories.forEach((genre) => {
    const category = createElement('span');
    category.textContent = genre.name;
    category.setAttribute('id', genre.id);
    $('.categories-container').appendChild(category);
  });
}

export default renderCategories;
