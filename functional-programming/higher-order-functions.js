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

// Map
function map(fn, array) {
  if(length(array) === 0) return [];
  return [fn(head(array))].concat(map(fn, tail(array)));
}

const doubled = map(n => n * 2, wholes);
const halved = map(n => n / 2, wholes);

// Reduce
function reduce(fn, initialValue, array) {
  if(length(array) === 0) return initialValue;
  const newInitialValue = fn(initialValue, head(array));
  return reduce(fn, newInitialValue, tail(array));
}

const sum = reduce((acc, value) => acc + value, 0, wholes);
const max = reduce((acc, value) => acc > value ? acc : value, 0, wholes);

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