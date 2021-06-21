const { add } = require('./math.js');

test('test add', () => {
  expect(add(3,3)).toBe(6)
})