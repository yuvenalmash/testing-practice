const str = require('./string')
const value = 'random string'
// const value = ''

describe('stringLength module', () =>{
  test('length of value is atleast 1', () =>{
    expect(str.stringLength(value)).not.toBe(0)
  })

  test('length of value is equal to 13', () =>{
    expect(str.stringLength(value)).toBe(13)
  })
})

describe('reverseString module', () => {
  test('Reverse the string',()=>{
    expect(str.reverseString(value)).toBe('gnirts modnar')
  })
})

describe('Capitalize module', () =>{
  test('Capitalize first letter',() =>{
    expect(str.capitalize(value)).toBe('Random string')
  })
})

