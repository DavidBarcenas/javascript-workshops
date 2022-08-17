import { api, createElement } from './helpers.js';

(async () => {
  const { data } = await api('genre/movie/list');

  const navContainer = document.getElementById('categories');
  const category = createElement('span');

  console.log(data.genres);
})();
