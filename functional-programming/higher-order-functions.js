// Filter
const wholes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(predicateFn, array) {
  if(length(array) === 0) return [];
  const firstItem = head(array)
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

function isEven(n) {
  return n % 2 === 0;
}

const evens = filter(isEven, wholes);

const odds = filter(n => {
  return !isEven(n);
}, wholes)

const greaterThanFive = filter(n => n > 5, wholes)

function isPrime(n) {
  if(n <= 1) return false;
  const wholes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const posibleFactors = filter(m => m > 1 && m < n, wholes)
  const factors = filter(m => n % m === 0, posibleFactors)
  return length(factors) === 0;
}

const primes = filter(isPrime, wholes);

// Helper functions
function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function concat(array1, array2) {
  return array1.concat(array2);
}