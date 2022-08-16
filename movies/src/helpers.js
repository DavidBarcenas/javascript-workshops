export function createElement(el) {
  return document.createElement(el);
}

export function getYear(date) {
  console.log(date.slice(0, 4));
  return date.slice(0, 4);
}

export function getRating(votes) {
  return votes.toFixed(1);
}

export function getImage(image) {
  return `https://image.tmdb.org/t/p/w500/${image}`;
}
