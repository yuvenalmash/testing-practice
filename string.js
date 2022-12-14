const stringLength = string => {
  if (string.length < 1) {
    throw new Error('String has less than one character')
  }
  return string.length
}

const reverseString = string => {
  return [...string].reduce((x, y) => y.concat(x));
}

module.exports = { stringLength, reverseString }