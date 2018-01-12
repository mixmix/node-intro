var lodash = require('lodash')

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
}
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
}
 
var results = lodash.merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

console.log(results)


