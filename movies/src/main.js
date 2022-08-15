import { getImage, getRating } from './helpers';

async function getTrendingMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  const movies = data.results;

  movies.slice(10, 12).forEach((movie) => {
    const movieContainer = createElement('figure');
    movieContainer.classList.add('img-container');

    const movieImg = createElement('img');
    movieImg.setAttribute('alt', movie.title).setAttribute('src', getImage(movie.backdrop_path));

    const movieDetails = createElement('figcaption');
    const movieDetailsContainer = createElement('div');
    movieDetailsContainer.classList.add('img-description');

    const movieTitle = createElement('h3');
    movieTitle.textContent = movie.title;

    const movieRelease = createElement('span');
    movieRelease.classList.add('year', 'light-text').textContent = getYear(movie.release_date);

    const movieRating = createElement('span');
    movieRating.classList.add('rating').textContent = getRating(movie.vote_average) + ' rating';

    const movieActions = createElement('div');
    movieActions.classList.add('img-actions');

    const movieWatchBtn = createElement('button');
    movieWatchBtn.classList.add('btn-primary').textContent = 'Watch now';

    const movieAddBtn = createElement('button');
    movieAddBtn.classList.add('btn-plus');

    const movieAddBtnIcon = createElement('i');
    movieAddBtnIcon.classList.add('fa-solid', 'fa-plus');

    movieAddBtn.appendChild(movieAddBtnIcon);

    movieDetailsContainer
      .appendChild(movieTitle)
      .appendChild(movieRelease)
      .appendChild(movieRating);

    movieActions.appendChild(movieWatchBtn).appendChild(movieAddBtn);
    movieDetails.appendChild(movieDetailsContainer).appendChild(movieActions);
    movieContainer.appendChild(movieImg).appendChild(movieDetails);

    document.getElementById('trending-section').appendChild(movieContainer);
  });
}

getTrendingMovies();
