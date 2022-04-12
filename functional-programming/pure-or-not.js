// ✅ => is pure - always returning the same output
// ❌ => no pure 

// ❌  data object is not pure, always changing 
// whenever the function is called it will return a different output
function getDate() { 
  return new Date().toDateString()
}

// ✅
function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString()
}

// ✅
function toHex(n) {
  let hex = n.toString(16)
  return hex.padStart(2, '0')
}

// ✅
function rgbToHex(r, g, b) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// ❌ does not return anything
// has a side effect with the document
function setColor(r, g, b) {
  const hex = rgbToHex(r, g, b)
  const colorMe = document.getElementById('colorMe')
  colorMe.setAttribute('style', `background-color: ${hex}`)
}

// ❌ is fetching data from outside url
// if the request fails it returns a different result
async function readJsonFile(filename) {
  const file = await fetch(filename)
  return await file.json()
}

// ✅
function writeJsonString(object) {
  return JSON.stringify(object, null, 2)
}

// ✅
function exclusiveOr(a, b) {
  return (a || b) && !(a && b)
}

// ✅
function computeTruthTable(operator) {
  const truthValues = [true, false]
  const table = []

  for (const a of truthValues) {
    for (const b of truthValues) {
      const value = operator(a, b)
      table.push([a, b, value])
    }
  }

  return value
}