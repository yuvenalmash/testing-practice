import { stringLength, reverseString, capitalize } from "./string.js"
const value = 'random string'
// const value = ''

describe('stringLength module', () =>{
  test('length of value is atleast 1', () =>{
    expect(stringLength(value)).not.toBe(0)
  })

  test('length of value is equal to 13', () =>{
    expect(stringLength(value)).toBe(13)
  })
})

describe('reverseString module', () => {
  test('Reverse the string',()=>{
    expect(reverseString(value)).toBe('gnirts modnar')
  })
})

describe('Capitalize module', () =>{
  test('Capitalize first letter',() =>{
    expect(capitalize(value)).toBe('Random string')
  })
})
