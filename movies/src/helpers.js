export function createElement(el) {
  return document.createElement(el);
}

export function getYear(date) {
  return date.slice(0, 4);
}

export function getRating(votes) {
  return votes.float(2);
}

export function getImage(image) {
  return `https://image.tmdb.org/t/p/w500/${image}`;
}
