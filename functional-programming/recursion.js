function iterativeFactorial(n) {
  let product = 1
  while(n > 0) {
    product *= n
    n--
  }
  return product
}
iterativeFactorial(5) // 120

function recursiveFactorial(n) {
  if(n === 0) return 1;
  return n * recursiveFactorial(n - 1)
}
recursiveFactorial(5) // 120

function iterativeFibonacci(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;

  let prev = 0;
  let curr = 1;
  for(let i = n; i > 1; i--) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
iterativeFibonacci(2) // 1
iterativeFibonacci(6) // 8

function recursiveFibonacci(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
recursiveFibonacci(2) // 1
recursiveFibonacci(10) // 55 