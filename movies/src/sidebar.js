import { $, createElement, getImage, getRating } from './helpers.js';

function renderSidebar(movies) {
  movies.forEach((movie) => {
    const movieItem = createElement('li');
    movieItem.classList.add('flex', 'sidebar-poster');

    const movieImg = createElement('img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', getImage(movie.poster_path));

    const movieDescription = createElement('div');
    movieDescription.classList.add('sidebar-poster-description');

    const movieTitle = createElement('h3');
    movieTitle.textContent = movie.title;

    const movieGenre = createElement('span');
    movieGenre.textContent = 'Fiction';

    const movieRating = createElement('span');
    movieRating.classList.add('light-text');
    movieRating.textContent = getRating(movie.vote_average) + ' rating';

    const movieStars = createElement('div');
    movieStars.classList.add('flex', 'stars');

    for (let i = 1; i <= movie.vote_average / 2; i++) {
      const starIcon = createElement('i');
      starIcon.classList.add('fa-solid', 'fa-star');
      movieStars.appendChild(starIcon);
    }

    movieDescription.appendChild(movieTitle);
    movieDescription.appendChild(movieGenre);
    movieDescription.appendChild(movieRating);
    movieDescription.appendChild(movieStars);

    movieItem.appendChild(movieImg);
    movieItem.appendChild(movieDescription);

    $('.sidebar-list').appendChild(movieItem);
  });
}

export default renderSidebar;
