export const stringLength = string => {
  if (string.length < 1) {
    throw new Error('String has less than one character')
  }
  return string.length
}

export const reverseString = string => {
  return [...string].reduce((x, y) => y.concat(x));
}

export const capitalize = string => {
  const first = string.charAt(0).toUpperCase()
  const otherLetters = string.slice(1)
  return first.concat(otherLetters)
}
