import { $, createElement } from './helpers.js';

function renderCategories(categories) {
  const categoryContainer = $('.categories-container');
  categoryContainer.innerHTML = '';

  categories.forEach((genre) => {
    const category = createElement('span');
    category.textContent = genre.name;
    category.setAttribute('id', genre.id);
    categoryContainer.appendChild(category);
  });
}

export default renderCategories;
