function push(element, array) {
  return [...array, element]
}
postPush = push(4, myArray)

function update(index, value, array) {
  return array
    .slice(0, index - 1)
    .concat(value)
    .concat(array.slice(index))
}
postUpdate = update(0, "newValue", myArray)

function pop(array) {
  return array.slice(0, -1)
}
postPop = pop(MyArray)