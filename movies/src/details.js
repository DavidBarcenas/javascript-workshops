import { $, createElement, getImage, getRating } from './helpers.js';

function details(movie, categories) {
  const detailContainer = $('.detail-wrap');
  detailContainer.innerHTML = '';
  $('.detail article').style.background = `no-repeat center/cover url(${getImage(
    movie.backdrop_path,
    'original'
  )})`;

  const backButton = createElement('span');
  backButton.classList.add('cta-back');
  const backButtonIcon = createElement('i');
  backButtonIcon.classList.add('fa-solid', 'fa-arrow-left-long');
  backButton.appendChild(backButtonIcon);
  const backButtonText = document.createTextNode('back');
  backButton.appendChild(backButtonText);
  backButton.addEventListener('click', () => history.back(), false);

  const title = createElement('h2');
  title.textContent = movie.title;

  const movieRelease = createElement('span');
  movieRelease.classList.add('light-text');
  movieRelease.textContent = getRating(movie.vote_average) + ' rating';

  const movieStars = createElement('div');
  movieStars.classList.add('flex', 'stars');
  for (let i = 1; i <= movie.vote_average / 2; i++) {
    const starIcon = createElement('i');
    starIcon.classList.add('fa-solid', 'fa-star');
    movieStars.appendChild(starIcon);
  }

  const categoriesContainer = createElement('div');
  categoriesContainer.classList.add('flex', 'categories');
  movie.genres.forEach((genre) => {
    categories.forEach(({ name }) => {
      if (genre.name === name) {
        const category = createElement('span');
        category.textContent = name;
        categoriesContainer.appendChild(category);
      }
    });
  });

  const btnAdd = createElement('button');
  btnAdd.classList.add('btn-primary');
  const btnIcon = createElement('i');
  btnIcon.classList.add('fa-solid', 'fa-plus');
  btnAdd.appendChild(btnIcon);

  const overview = createElement('p');
  overview.textContent = movie.overview;

  detailContainer.appendChild(backButton);
  detailContainer.appendChild(title);
  detailContainer.appendChild(movieRelease);
  detailContainer.appendChild(movieStars);
  detailContainer.appendChild(categoriesContainer);
  detailContainer.appendChild(btnAdd);
  detailContainer.appendChild(overview);
}

export default details;
