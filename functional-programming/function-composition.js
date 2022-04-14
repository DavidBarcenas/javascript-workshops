function pipeline(...functions) {
  if(length(functions) === 0) return input => input
  if(length(functions) === 1) return input => head(functions)(input)
  return function(input) {
    return pipeline(...tail(functions))(head(functions)(input))
  }
}

function reducePipeline(...functions) {
  return input => reduce((acc, fn) => fn(acc), input, functions);
}

pluralize = singularWord => singularWord + 's'
emoji = word => "😀 " + word
exclaim = sentence => sentence + "!"

showSomeText = pipeline(pluralize, heart, exclaim);
pipelineText = showSomeText('pipeline')
happyWith = showSomeText('pure functions')

someShowText = pipeline(exclaim, heart, pluralize)
wrongOrder = someShowText('pipeline')

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