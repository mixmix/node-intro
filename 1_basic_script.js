// things node comes with:
// - JS runner (node index.js in terminal)
// - REPL
// - knows how to require
// - has some basic I/O modules

var fs = require('fs')
var double = require('./utils/double.js')

var numbers = [1, 2, 3, 4, 5]

var results = numbers
  .map(double)
  // .map(function(n) { return 2*n })

console.log('results', results)

fs.writeFile('results.txt', results, (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})
