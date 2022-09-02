import { $, createElement, createObserver, getImage, getRating, getYear } from './helpers.js';
const imageDefault =
  'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg';

function renderPoster(movies, section, useBackdrop = false, imgSize = 'w300') {
  const lazyload = createObserver();
  $(section).innerHTML = '';

  movies.forEach((movie) => {
    const image = useBackdrop ? movie.backdrop_path : movie.poster_path;

    const movieContainer = createElement('figure');
    movieContainer.classList.add('img-container');
    movieContainer.addEventListener('click', () => (location.hash = `movie=${movie.id}`));

    const movieImg = createElement('img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('data-img', image ? getImage(image, imgSize) : imageDefault);
    lazyload.observe(movieImg);

    const movieDetails = createElement('figcaption');
    const movieDetailsContainer = createElement('div');
    movieDetailsContainer.classList.add('img-description');

    const movieTitle = createElement('h3');
    movieTitle.textContent = movie.title;

    const movieRelease = createElement('span');
    movieRelease.classList.add('year', 'light-text');
    movieRelease.textContent = getYear(movie.release_date);

    const movieRating = createElement('span');
    movieRating.classList.add('rating');
    movieRating.textContent = getRating(movie.vote_average) + ' rating';

    const movieActions = createElement('div');
    movieActions.classList.add('img-actions');

    const movieWatchBtn = createElement('button');
    movieWatchBtn.classList.add('btn-primary');
    movieWatchBtn.textContent = 'Watch now';

    const movieAddBtn = createElement('button');
    movieAddBtn.classList.add('btn-plus');

    const movieAddBtnIcon = createElement('i');
    movieAddBtnIcon.classList.add('fa-solid', 'fa-plus');

    movieAddBtn.appendChild(movieAddBtnIcon);

    movieDetailsContainer.appendChild(movieTitle);
    movieDetailsContainer.appendChild(movieRelease);
    movieDetailsContainer.appendChild(movieRating);

    movieActions.appendChild(movieWatchBtn);
    movieActions.appendChild(movieAddBtn);

    movieDetails.appendChild(movieDetailsContainer);
    movieDetails.appendChild(movieActions);

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieDetails);

    $(section).appendChild(movieContainer);
  });
}

export default renderPoster;
