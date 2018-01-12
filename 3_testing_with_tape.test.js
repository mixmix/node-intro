var lodash = require('lodash')
var test = require('tape')

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
}
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
}
 
test('check lodash', (t) => {
  var expected = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
  var results = lodash.merge(object, other)
  t.deepEqual(results, expected, 'merge worked!') 

  t.end()
})

