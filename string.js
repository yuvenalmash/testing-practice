const stringLength = string => {

  if (string.length < 1) {
    throw new Error('String has less than one character')
  }
  
  return string.length
}

module.exports = stringLength