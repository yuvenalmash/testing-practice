const stringLength = require('./string')

describe('stringLength module', () =>{
  const value = ''
  console.log(`value is ${value}`)
  test('length of value is atleast 1', () =>{
    expect(stringLength(value)).not.toBe(0)
  })

  test('length of value is equal to 6', () =>{
    expect(stringLength(value)).toBe(6)
  })
})
