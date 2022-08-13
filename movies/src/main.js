async function getTrendingMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  const movies = data.results;

  movies.slice(10, 12).forEach((movie) => {
    const movieContainer = createElement('figure');
    movieContainer.classList.add('img-container');

    const movieImg = createElement('img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`);

    const movieDetails = createElement('figcaption');
    const movieDetailsContainer = createElement('div');
    movieDetailsContainer.classList.add('img-description');
    const movieTitle = createElement('h3');
    movieTitle.textContent = movie.title;

    const movieRelease = createElement('span');
    movieRelease.classList.add('year', 'light-text');
    movieRelease.textContent = movie.release_date;

    const movieRating = createElement('span');
    movieRating.classList.add('rating');
    movieRating.textContent = movie.vote_average + ' rating';

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
    document.getElementById('trending-section').appendChild(movieContainer);
  });
}

getTrendingMovies();
