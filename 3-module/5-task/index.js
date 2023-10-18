function getMinMax(str) {
  let numbers = str.split(' ')
                   .filter(num => Number(num))
                   .map(num => Number(num));
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}
