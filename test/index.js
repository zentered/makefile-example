const test = require('tape')
const fn = require('../index')

test('add', assert => {
  const actual = fn.add(1, 1)
  const expected = 2

  assert.equal(actual, expected, 'adds correctly')
  assert.end()
})

test('subtract', assert => {
  const actual = fn.subtract(1, 1)
  const expected = 0

  assert.equal(actual, expected, 'subtracts correctly')
  assert.end()
})
